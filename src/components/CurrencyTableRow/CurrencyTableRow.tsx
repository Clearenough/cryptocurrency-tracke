import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICurrencyInfo } from '../../@types/common';
import ControlButton from '../common/buttons/controlButton/ControlButton';
import ModalAddCurrency from '../common/modals/modalAddCurrency/ModalAddCurrency';
import styles from './CurrencyTableRow.module.scss';

function CurrencyTableRow(currencyInfo: ICurrencyInfo) {
  const [isModalAddCurrencyOpen, setIsModalAddCurrencyOpen] = useState(false);
  const navigate = useNavigate();

  const { rank, name, priceUsd, changePercent24Hr, marketCapUsd, vwap24Hr, volumeUsd24Hr, supply } =
    currencyInfo;

  const mockId = 'bitcoin';

  function openInfo(mockId: string): void {
    navigate(`/info/${mockId}`);
  }

  function openModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    setIsModalAddCurrencyOpen(true);
  }

  return (
    <>
      <tr className={styles.tableRow} onClick={() => openInfo(mockId)}>
        <td className={styles.tableCell}>{rank}</td>
        <td className={styles.tableCell}>{name}</td>
        <td className={styles.tableCell}>{priceUsd}</td>
        <td className={styles.tableCell}>{changePercent24Hr}</td>
        <td className={styles.tableCell}>{marketCapUsd}</td>
        <td className={styles.tableCell}>{vwap24Hr}</td>
        <td className={styles.tableCell}>{volumeUsd24Hr}</td>
        <td className={styles.tableCell}>{supply}</td>
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
        <ModalAddCurrency close={setIsModalAddCurrencyOpen} currencyInfo={currencyInfo} />
      )}
    </>
  );
}

export default CurrencyTableRow;
