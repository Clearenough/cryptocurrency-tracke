import React, { useState } from 'react';
import { ICurrencyInfo } from '../../../../@types/common';
import ControlButton from '../../buttons/controlButton/ControlButton';
import NumberInput from '../../inputs/numberInput/NumberInput';
import styles from './ModalAddCurrency.module.scss';

interface IProps {
  close: (value: boolean) => void;
  currencyInfo: ICurrencyInfo;
}

function ModalAddCurrency({ close, currencyInfo }: IProps) {
  const [value, setValue] = useState('0');

  function onCurrencyAdd(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <div className={styles.modal} onClick={() => close(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.currencyName}>{currencyInfo.name}</h2>
        <form className={styles.form}>
          <NumberInput onChange={(e) => setValue(e.target.value)} value={value} />
          <ControlButton type="ADD" onClick={(e) => onCurrencyAdd(e)} />
        </form>
      </div>
    </div>
  );
}

export default ModalAddCurrency;
