import React, { useState } from 'react';
import { ICurrencyInfo } from '../../@types/common';
import styles from './ModalAddCurrency.module.scss';

interface IProps {
  close: () => void;
  currencyInfo: ICurrencyInfo;
}

function ModalAddCurrency({ close, currencyInfo }: IProps) {
  const [value, setValue] = useState('0');

  function onCurrencyAdd(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <div className={styles.modal} onClick={() => close()}>
      <div className={styles.modalContent}>
        <h2 className={styles.currencyName}>{currencyInfo.name}</h2>
        <form className={styles.form}>
          <input
            type="number"
            name="currencyAmount"
            placeholder="Enter amount"
            step={0.001}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={styles.input}
          />
          <button onClick={(e) => onCurrencyAdd(e)} className={styles.addButton}>
            +
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalAddCurrency;
