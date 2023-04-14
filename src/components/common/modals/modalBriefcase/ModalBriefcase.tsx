import { useContext } from 'react';
import { BriefcaseContext } from '../../../../context/briefcaseContext';
import { CurrencyContext } from '../../../../context/currencyContext';

import ControlButton from '../../buttons/controlButton/ControlButton';

import { numberParser } from '../../../../utils/numberParser';
import { totalBriefcaseSum } from '../../../../utils/briefcaseSumsInfo';

import shop from './../../../../assets/svg/briefcase.svg';

import styles from './ModalBriefcase.module.scss';
import { BriefcaseActionType } from '../../../../@types/common';

interface IModalBriefcaseProps {
  close: (value: boolean) => void;
}

function ModalBriefcase({ close }: IModalBriefcaseProps) {
  const { briefcaseState, briefcaseDispatch } = useContext(BriefcaseContext);
  const { currencyInfo } = useContext(CurrencyContext);

  const deleteCurrency = (id: string) => {
    briefcaseDispatch({
      type: BriefcaseActionType.REMOVE,
      payload: {
        currencyId: id,
      },
    });
  };

  const { currentBriefcaseSummary } = totalBriefcaseSum(briefcaseState.briefcaseInfo, currencyInfo);

  return (
    <div className={styles.modal} onClick={() => close(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img className={styles.img} src={shop} alt="briefcase" />
        <h2 className={styles.totalSum}>
          Current total sum: ${numberParser(currentBriefcaseSummary.toString())}
        </h2>
        <ul className={styles.currencyList}>
          {briefcaseState.briefcaseInfo.map((item) => (
            <li key={item.id} className={styles.listItem}>
              <span>{item.name}</span>
              <span>{'Price:' + numberParser(item.priceUsd + '$')}</span>
              <span>{'quantity:' + numberParser(item.quantity)}</span>
              <ControlButton
                type={'DELETE'}
                onClick={() => {
                  deleteCurrency(item.id);
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
