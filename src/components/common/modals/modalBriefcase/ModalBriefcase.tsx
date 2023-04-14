import { useCallback, useContext, useState } from 'react';
import { BriefcaseContext } from '../../../../context/briefcaseContext';
import { CurrencyContext } from '../../../../context/currencyContext';

import ControlButton from '../../buttons/controlButton/ControlButton';

import { numberParser } from '../../../../utils/numberParser';
import { deleteCurrencyFromBriefcase } from '../../../../utils/deleteCurrencyFromBriefcase';
import { totalBriefcaseSum } from '../../../../utils/briefcaseSumsInfo';

import shop from './../../../../assets/svg/briefcase.svg';

import styles from './ModalBriefcase.module.scss';
import { LOCALSTORAGE_BRIEFCASE_INFO_KEY } from '../../../../@types/constants';

interface IModalBriefcaseProps {
  close: (value: boolean) => void;
}

function ModalBriefcase({ close }: IModalBriefcaseProps) {
  const { briefcaseInfo, setBriefcaseInfo } = useContext(BriefcaseContext);
  const { currencyInfo } = useContext(CurrencyContext);
  const [deleteId, setDeleteId] = useState('');

  const deleteCurrency = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      const newBriefcaseCurrencyInfo = deleteCurrencyFromBriefcase(briefcaseInfo, deleteId);
      localStorage.setItem(
        LOCALSTORAGE_BRIEFCASE_INFO_KEY,
        JSON.stringify(newBriefcaseCurrencyInfo)
      );
      setBriefcaseInfo(newBriefcaseCurrencyInfo);
    },
    [deleteId]
  );

  const { currentBriefcaseSummary } = totalBriefcaseSum(briefcaseInfo, currencyInfo);

  return (
    <div className={styles.modal} onClick={() => close(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img className={styles.img} src={shop} alt="briefcase" />
        <h2 className={styles.totalSum}>
          Current total sum: ${numberParser(currentBriefcaseSummary.toString())}
        </h2>
        <ul className={styles.currencyList}>
          {briefcaseInfo.map((item) => (
            <li key={item.id} className={styles.listItem}>
              <span>{item.name}</span>
              <span>{'Price:' + numberParser(item.priceUsd + '$')}</span>
              <span>{'quantity:' + numberParser(item.quantity)}</span>
              <ControlButton
                type={'DELETE'}
                onClick={(e) => {
                  setDeleteId(item.id);
                  deleteCurrency(e);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ModalBriefcase;
