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
import LoadingScreen from '../../components/common/loading/LoadingScreen';
import APIError from '../../components/common/error/APIError';

function Info() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [currencyHistory, setCurrencyHistory] = useState<ICurrencyHistory[]>([]);
  const [currency, setCurrency] = useState<ICurrencyInfo>();
  const [value, setValue] = useState('0');
  const { briefcaseDispatch } = useContext(BriefcaseContext);

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      if (id) {
        setIsLoading(true);
        const historyRes = await fetchHistory(id, 'd1');
        setCurrencyHistory(historyRes.data);
        if (historyRes.error) {
          setError(historyRes.error);
          return;
        }

        const currencyRes = await fetchCurrencyInfo(id);
        setCurrency(currencyRes.data);
        if (currencyRes.error) {
          setError(currencyRes.error);
          return;
        }
      }
    };
    fetch().then(() => setIsLoading(false));
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
    [value]
  );

  const { maxPrice, minPrice } = maxAndMinPrices(currencyHistory);
  console.log(maxPrice, minPrice);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <LoadingScreen />
      ) : error ? (
        <APIError message={error} />
      ) : (
        <>
          <h2 className={styles.name}>{currency?.name}</h2>
          {currency && (
            <ul className={styles.infoList}>
              <li>{`${t('currency.change')}: ${numberParser(currency!.changePercent24Hr)}`}</li>
              <li>{`${t('currency.cap')}: ${numberParser(currency!.marketCapUsd)}`}</li>
              <li>{`${t('currency.volume')}: ${numberParser(currency!.volumeUsd24Hr)}`}</li>
            </ul>
          )}
          {currency && (
            <ul className={styles.infoList}>
              <li>{`${t('currency.price')}: ${numberParser(currency!.priceUsd)}`}</li>
              <li>{`${t('currency.max')}: ${numberParser(maxPrice.toString())}`}</li>
              <li>{`${t('currency.min')}: ${numberParser(minPrice.toString())}`}</li>
            </ul>
          )}
          <form className={styles.form}>
            <NumberInput onChange={(e) => setValue(e.target.value)} value={value} />
            <ControlButton type="ADD" onClick={(e) => onCurrencyAdd(e)} />
          </form>
          <CurrencyHistoryChart priceHistory={currencyHistory} />
        </>
      )}
    </div>
  );
}

export default Info;
