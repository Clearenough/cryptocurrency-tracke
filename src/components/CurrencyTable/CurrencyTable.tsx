import { ICurrencyInfo } from '../../@types/common';
import CurrencyTableRow from '../CurrencyTableRow/CurrencyTableRow';
import styles from './CurrencyTable.module.scss';

const tableData: ICurrencyInfo[] = [
  {
    changePercent24Hr: '3.528',
    explorer: 'https://blockchain.info/',
    id: 'bitcoin',
    marketCapUsd: '5845',
    maxSupply: '21000',
    name: 'Bitcoin',
    priceUsd: '30219',
    rank: '1',
    supply: '19342',
    symbol: 'BTC',
    volumeUsd24Hr: '77931',
    vwap24Hr: '29891',
  },
  {
    changePercent24Hr: '3.528',
    explorer: 'https://blockchain.info/',
    id: 'bitcoin',
    marketCapUsd: '5845',
    maxSupply: '21000',
    name: 'Bitcoin',
    priceUsd: '30219',
    rank: '1',
    supply: '19342',
    symbol: 'BTC',
    volumeUsd24Hr: '77931',
    vwap24Hr: '29891',
  },
  {
    changePercent24Hr: '3.528',
    explorer: 'https://blockchain.info/',
    id: 'bitcoin',
    marketCapUsd: '5845',
    maxSupply: '21000',
    name: 'Bitcoin',
    priceUsd: '30219',
    rank: '1',
    supply: '19342',
    symbol: 'BTC',
    volumeUsd24Hr: '77931',
    vwap24Hr: '29891',
  },
  {
    changePercent24Hr: '3.528',
    explorer: 'https://blockchain.info/',
    id: 'bitcoin',
    marketCapUsd: '5845',
    maxSupply: '21000',
    name: 'Bitcoin',
    priceUsd: '30219',
    rank: '1',
    supply: '19342',
    symbol: 'BTC',
    volumeUsd24Hr: '77931',
    vwap24Hr: '29891',
  },
];

function CurrencyTable() {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr className={styles.tableRow}>
          <th className={styles.tableCell}>Rank</th>
          <th className={styles.tableCell}>Name</th>
          <th className={styles.tableCell}>Price</th>
          <th className={styles.tableCell}>24 Change</th>
          <th className={styles.tableCell}>Market Cap</th>
          <th className={styles.tableCell}>24 VWAP</th>
          <th className={styles.tableCell}>24 Volume</th>
          <th className={styles.tableCell}>Supply</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => {
          return <CurrencyTableRow key={item.id} {...item} />;
        })}
      </tbody>
    </table>
  );
}

export default CurrencyTable;
