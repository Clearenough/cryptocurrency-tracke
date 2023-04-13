import React, { useContext, useState } from 'react';
import { ICurrencyForBriefcase } from '../../../../@types/common';
import { LOCALSTORAGE_BRIEFCASE_INFO_KEY } from '../../../../@types/constants';
import { BriefcaseContext } from '../../../../context/briefcaseContext';
import { addCurrencyToBriefcase } from '../../../../utils/addCurrencyToBriefcase';
import ControlButton from '../../buttons/controlButton/ControlButton';
import NumberInput from '../../inputs/numberInput/NumberInput';
import styles from './ModalAddCurrency.module.scss';

interface IProps {
  close: (value: boolean) => void;
  currencyForBriefcase: ICurrencyForBriefcase;
}

function ModalAddCurrency({ close, currencyForBriefcase }: IProps) {
  const [value, setValue] = useState('0');
  const { briefcaseInfo, setBriefcaseInfo } = useContext(BriefcaseContext);
  const { id, name, priceUsd } = currencyForBriefcase;

  function onCurrencyAdd(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const newBriefcaseCurrencyInfo = addCurrencyToBriefcase(
      briefcaseInfo,
      id,
      value,
      name,
      priceUsd
    );
    setBriefcaseInfo(newBriefcaseCurrencyInfo);
    localStorage.setItem(LOCALSTORAGE_BRIEFCASE_INFO_KEY, JSON.stringify(newBriefcaseCurrencyInfo));
    close(false);
  }

  return (
    <div className={styles.modal} onClick={() => close(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.currencyName}>{currencyForBriefcase.name}</h2>
        <form className={styles.form}>
          <NumberInput onChange={(e) => setValue(e.target.value)} value={value} />
          <ControlButton type="ADD" onClick={(e) => onCurrencyAdd(e)} />
        </form>
      </div>
    </div>
  );
}

export default ModalAddCurrency;
