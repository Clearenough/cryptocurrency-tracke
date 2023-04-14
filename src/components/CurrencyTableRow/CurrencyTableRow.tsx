import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICurrencyInfo } from '../../@types/common';
import { numberParser } from '../../utils/numberParser';
import ControlButton from '../common/buttons/controlButton/ControlButton';
import ModalAddCurrency from '../common/modals/modalAddCurrency/ModalAddCurrency';
import styles from './CurrencyTableRow.module.scss';

interface ICurrencyTableRowProps {
  currencyItem: ICurrencyInfo;
}

function CurrencyTableRow({ currencyItem }: ICurrencyTableRowProps) {
  const [isModalAddCurrencyOpen, setIsModalAddCurrencyOpen] = useState(false);
  const navigate = useNavigate();

  const {
    rank,
    name,
    priceUsd,
    changePercent24Hr,
    marketCapUsd,
    vwap24Hr,
    volumeUsd24Hr,
    supply,
    id,
  } = currencyItem;

  function openInfo(): void {
    navigate(`/info/${id}`);
  }

  function openModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    setIsModalAddCurrencyOpen(true);
  }

  return (
    <>
      <tr className={styles.tableRow} onClick={openInfo}>
        <td className={styles.tableCell}>{rank}</td>
        <td className={styles.tableCell}>{name}</td>
        <td className={styles.tableCell}>{numberParser(priceUsd)}</td>
        <td className={styles.tableCell}>{numberParser(changePercent24Hr)}</td>
        <td className={styles.tableCell}>{numberParser(marketCapUsd)}</td>
        <td className={styles.tableCell}>{numberParser(vwap24Hr)}</td>
        <td className={styles.tableCell}>{numberParser(volumeUsd24Hr)}</td>
        <td className={styles.tableCell}>{numberParser(supply)}</td>
        <td className={styles.tableCell}>
          <ControlButton
            onClick={(e) => {
              openModal(e);
            }}
            type={'ADD'}
          />
        </td>
      </tr>
      {isModalAddCurrencyOpen && (
        <ModalAddCurrency
          close={setIsModalAddCurrencyOpen}
          currencyForBriefcase={{ id, name, priceUsd }}
        />
      )}
    </>
  );
}

export default CurrencyTableRow;
