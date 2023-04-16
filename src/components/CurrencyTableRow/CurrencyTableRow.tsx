import classNames from 'classnames';

import { useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ControlButton from '../common/buttons/controlButton/ControlButton';
import ModalAddCurrency from '../common/modals/modalAddCurrency/ModalAddCurrency';

import { ICurrencyInfo } from '../../@types/common';
import { numberParser } from '../../utils/numberParser';

import styles from './CurrencyTableRow.module.scss';

interface ICurrencyTableRowProps {
  currencyItem: ICurrencyInfo;
}

function CurrencyTableRow({ currencyItem }: ICurrencyTableRowProps) {
  const [isModalAddCurrencyOpen, setIsModalAddCurrencyOpen] = useState(false);
  const navigate = useNavigate();

  const laptopClass = classNames([styles.tableCell, styles.laptopHide]);
  const tabletClass = classNames([styles.tableCell, styles.tabletHide]);

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

  const openInfo = useCallback((): void => {
    navigate(`/info/${id}`);
  }, [currencyItem]);

  const openModal = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsModalAddCurrencyOpen(true);
    },
    [currencyItem]
  );

  return (
    <>
      <tr className={styles.tableRow} onClick={openInfo}>
        <td className={styles.tableCell}>{rank}</td>
        <td className={styles.tableCell}>{name}</td>
        <td className={styles.tableCell}>{numberParser(priceUsd)}</td>
        <td className={tabletClass}>{numberParser(changePercent24Hr)}</td>
        <td className={tabletClass}>{numberParser(marketCapUsd)}</td>
        <td className={tabletClass}>{numberParser(vwap24Hr)}</td>
        <td className={laptopClass}>{numberParser(volumeUsd24Hr)}</td>
        <td className={laptopClass}>{numberParser(supply)}</td>
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
