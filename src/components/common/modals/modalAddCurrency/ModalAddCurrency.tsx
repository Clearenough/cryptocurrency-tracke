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
  const [value, setValue] = useState('0');
  const { briefcaseDispatch } = useContext(BriefcaseContext);

  function onCurrencyAdd() {
    briefcaseDispatch({
      type: BriefcaseActionType.ADD,
      payload: {
        currency: { ...currencyForBriefcase },
        quantity: +value,
      },
    });
    close(false);
  }

  return (
    <div className={styles.modal} onClick={() => close(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.currencyName}>{currencyForBriefcase.name}</h2>
        <form className={styles.form}>
          <NumberInput onChange={(e) => setValue(e.target.value)} value={value} />
          <ControlButton type="ADD" onClick={onCurrencyAdd} />
        </form>
      </div>
    </div>
  );
}

export default ModalAddCurrency;
