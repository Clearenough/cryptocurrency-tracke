import { useTranslation } from 'react-i18next';

import { useContext } from 'react';
import { BriefcaseContext } from '../../../../context/briefcaseContext';

import ControlButton from '../../buttons/controlButton/ControlButton';

import { numberParser } from '../../../../utils/numberParser';

import shop from './../../../../assets/svg/briefcase.svg';

import styles from './ModalBriefcase.module.scss';
import { BriefcaseActionType } from '../../../../@types/common';

interface IModalBriefcaseProps {
  currentPrice: number;
  close: (value: boolean) => void;
}

function ModalBriefcase({ close, currentPrice }: IModalBriefcaseProps) {
  const { t } = useTranslation();
  const { briefcaseState, briefcaseDispatch } = useContext(BriefcaseContext);

  const deleteCurrency = (id: string) => {
    briefcaseDispatch({
      type: BriefcaseActionType.REMOVE,
      payload: {
        currencyId: id,
      },
    });
  };

  return (
    <div className={styles.modal} onClick={() => close(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img className={styles.img} src={shop} alt="briefcase" />
        <h2 className={styles.totalSum}>
          {t('modal.total_sum', { howMany: numberParser(currentPrice.toString()) })}
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
