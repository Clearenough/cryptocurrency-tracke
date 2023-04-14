import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICurrencyHistory } from '../../@types/common';
import { fetchHistory } from '../../API/api';
import { CurrencyContext } from '../../context/currencyContext';
import { maxAndMinPrices } from '../../utils/maxAndMinPrices';
import { numberParser } from '../../utils/numberParser';
import styles from './Info.module.scss';

function Info() {
  const { id } = useParams();
  const [currencyHistory, setCurrencyHistory] = useState<ICurrencyHistory[]>([]);
  const { currencyInfo } = useContext(CurrencyContext);

  const currency = currencyInfo.find((item) => item.id === id);

  useEffect(() => {
    (async function () {
      if (id) {
        const res = await fetchHistory(id, 'd1');
        setCurrencyHistory(res.data);
      }
    })();
  }, []);

  const { maxPrice, minPrice } = maxAndMinPrices(currencyHistory);
  console.log(maxPrice, minPrice);

  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{currency?.name}</h2>
      {currency && (
        <ul className={`${styles.infoList} ${styles.currencyInfo}`}>
          <li>{`24 Change: ${numberParser(currency.changePercent24Hr)}`}</li>
          <li>{`Market Cap: ${numberParser(currency.marketCapUsd)}`}</li>
          <li>{`24 Volume: ${numberParser(currency.volumeUsd24Hr)}`}</li>
        </ul>
      )}
      {currency && (
        <ul className={`${styles.infoList} ${styles.priceHistory}`}>
          <li>{`Current Price: ${numberParser(currency.priceUsd)}`}</li>
          <li>{`Max Price: ${numberParser(maxPrice.toString())}`}</li>
          <li>{`Min Price: ${numberParser(minPrice.toString())}`}</li>
        </ul>
      )}
    </div>
  );
}

export default Info;
