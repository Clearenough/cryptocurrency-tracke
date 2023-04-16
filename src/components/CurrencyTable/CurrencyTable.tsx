import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import CurrencyTableRow from '../CurrencyTableRow/CurrencyTableRow';

import { ICurrencyInfo } from '../../@types/common';

import styles from './CurrencyTable.module.scss';

interface ICurrencyTableProps {
  tableInfo: ICurrencyInfo[];
}

function CurrencyTable({ tableInfo }: ICurrencyTableProps) {
  const { t } = useTranslation();

  const laptopClass = classNames([styles.tableCell, styles.laptopHide]);
  const tabletClass = classNames([styles.tableCell, styles.tabletHide]);

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr className={styles.tableRow}>
          <th className={styles.tableCell}>{t('currency.rank')}</th>
          <th className={styles.tableCell}>{t('currency.name')}</th>
          <th className={styles.tableCell}>{t('currency.price')}</th>
          <th className={tabletClass}>{t('currency.change')}</th>
          <th className={tabletClass}>{t('currency.cap')}</th>
          <th className={tabletClass}>{t('currency.vwap')}</th>
          <th className={laptopClass}>{t('currency.volume')}</th>
          <th className={laptopClass}>{t('currency.supply')}</th>
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
