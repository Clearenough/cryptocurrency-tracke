import { ICurrencyInfo } from '../../@types/common';
import CurrencyTableRow from '../CurrencyTableRow/CurrencyTableRow';
import styles from './CurrencyTable.module.scss';

interface ICurrencyTableProps {
  tableInfo: ICurrencyInfo[];
}

function CurrencyTable({ tableInfo }: ICurrencyTableProps) {
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
        {tableInfo.map((item) => {
          return <CurrencyTableRow key={item.id} currencyItem={item} />;
        })}
      </tbody>
    </table>
  );
}

export default CurrencyTable;
