import { useTranslation } from 'react-i18next';

import { useParams } from 'react-router-dom';

import { useCallback, useContext, useEffect, useState } from 'react';
import { BriefcaseContext } from '../../context/briefcaseContext';

import { fetchCurrencyInfo, fetchHistory } from '../../API/api';

import ControlButton from '../../components/common/buttons/controlButton/ControlButton';
import CurrencyHistoryChart from '../../components/common/charts/currencyHistoryChart/CurrencyHistoryChart';
import NumberInput from '../../components/common/inputs/numberInput/NumberInput';

import { BriefcaseActionType, ICurrencyHistory, ICurrencyInfo } from '../../@types/common';
import { maxAndMinPrices } from '../../utils/maxAndMinPrices';
import { numberParser } from '../../utils/numberParser';

import styles from './Info.module.scss';

function Info() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [currencyHistory, setCurrencyHistory] = useState<ICurrencyHistory[]>([]);
  const [currency, setCurrency] = useState<ICurrencyInfo>();
  const [value, setValue] = useState('0');
  const { briefcaseDispatch } = useContext(BriefcaseContext);

  useEffect(() => {
    const fetch = async () => {
      if (id) {
        const historyRes = await fetchHistory(id, 'd1');
        setCurrencyHistory(historyRes.data);

        const currencyRes = await fetchCurrencyInfo(id);
        setCurrency(currencyRes.data);
      }
    };
    fetch();
  }, []);

  const onCurrencyAdd = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (id && currency) {
        briefcaseDispatch({
          type: BriefcaseActionType.ADD,
          payload: {
            currency: { id, name: currency.name, priceUsd: currency.priceUsd },
            quantity: +value,
          },
        });
      }
    },
    [id, currency]
  );

  const { maxPrice, minPrice } = maxAndMinPrices(currencyHistory);
  console.log(maxPrice, minPrice);

  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{currency?.name}</h2>
      {currency && (
        <ul className={`${styles.infoList} ${styles.currencyInfo}`}>
          <li>{`${t('currency.change')}: ${numberParser(currency.changePercent24Hr)}`}</li>
          <li>{`${t('currency.cap')}: ${numberParser(currency.marketCapUsd)}`}</li>
          <li>{`${t('currency.volume')}: ${numberParser(currency.volumeUsd24Hr)}`}</li>
        </ul>
      )}
      {currency && (
        <ul className={`${styles.infoList} ${styles.priceHistory}`}>
          <li>{`${t('currency.price')}: ${numberParser(currency.priceUsd)}`}</li>
          <li>{`${t('currency.max')}: ${numberParser(maxPrice.toString())}`}</li>
          <li>{`${t('currency.min')}: ${numberParser(minPrice.toString())}`}</li>
        </ul>
      )}
      <form className={styles.form}>
        <NumberInput onChange={(e) => setValue(e.target.value)} value={value} />
        <ControlButton type="ADD" onClick={(e) => onCurrencyAdd(e)} />
      </form>
      <CurrencyHistoryChart priceHistory={currencyHistory} />
    </div>
  );
}

export default Info;
