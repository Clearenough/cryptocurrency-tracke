import { ICurrencyInfo } from '../../@types/common';
import styles from './CurrencyTableRow.module.scss';

function CurrencyTableRow({
  rank,
  name,
  priceUsd,
  changePercent24Hr,
  marketCapUsd,
  vwap24Hr,
  volumeUsd24Hr,
  supply,
}: ICurrencyInfo) {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell}>{rank}</td>
      <td className={styles.tableCell}>{name}</td>
      <td className={styles.tableCell}>{priceUsd}</td>
      <td className={styles.tableCell}>{changePercent24Hr}</td>
      <td className={styles.tableCell}>{marketCapUsd}</td>
      <td className={styles.tableCell}>{vwap24Hr}</td>
      <td className={styles.tableCell}>{volumeUsd24Hr}</td>
      <td className={styles.tableCell}>{supply}</td>
    </tr>
  );
}

export default CurrencyTableRow;
