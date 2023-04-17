import { useTranslation } from 'react-i18next';

import React, { useContext, useState } from 'react';
import { BriefcaseContext } from '../../../../context/briefcaseContext';

import ControlButton from '../../buttons/controlButton/ControlButton';
import NumberInput from '../../inputs/numberInput/NumberInput';

import { BriefcaseActionType, ICurrencyForBriefcase } from '../../../../@types/common';

import styles from './ModalAddCurrency.module.scss';

interface IModalAddCurrencyProps {
  close: (value: boolean) => void;
  currencyForBriefcase: ICurrencyForBriefcase;
}

function ModalAddCurrency({ close, currencyForBriefcase }: IModalAddCurrencyProps) {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [isValidationError, setIsValidationError] = useState(false);
  const { briefcaseDispatch } = useContext(BriefcaseContext);

  function onCurrencyAdd(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (Number(value) && Number(value) !== 0) {
      setIsValidationError(false);
      briefcaseDispatch({
        type: BriefcaseActionType.ADD,
        payload: {
          currency: { ...currencyForBriefcase },
          quantity: +value,
        },
      });
      close(false);
      return;
    }
    setIsValidationError(true);
  }

  return (
    <div className={styles.modal} onClick={() => close(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.currencyName}>{currencyForBriefcase.name}</h2>
        <form className={styles.form}>
          <NumberInput onChange={(e) => setValue(e.target.value)} value={value} />
          <ControlButton type="ADD" onClick={(e) => onCurrencyAdd(e)} />
        </form>
        {isValidationError && <span className={styles.error}>{t('modal.validation_error')}</span>}
      </div>
    </div>
  );
}

export default ModalAddCurrency;
