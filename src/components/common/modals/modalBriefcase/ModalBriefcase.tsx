import styles from './ModalBriefcase.module.scss';
import shop from './../../../../assets/svg/briefcase.svg';
import ControlButton from '../../buttons/controlButton/ControlButton';
import { useContext, useState } from 'react';
import { BriefcaseContext } from '../../../../context/briefcaseContext';
import { numberParser } from '../../../../utils/numberParser';
import { deleteCurrencyFromBriefcase } from '../../../../utils/deleteCurrencyFromBriefcase';

interface IProps {
  close: (value: boolean) => void;
}

function ModalBriefcase({ close }: IProps) {
  const { briefcaseInfo, setBriefcaseInfo } = useContext(BriefcaseContext);
  const [deleteId, setDeleteId] = useState('');
  const summary = briefcaseInfo.reduce((acc, item) => {
    return +item.priceUsd * +item.quantity + acc;
  }, 0);

  console.log(briefcaseInfo, summary);

  function deleteCurrency(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const newBriefcaseCurrencyInfo = deleteCurrencyFromBriefcase(briefcaseInfo, deleteId);
    setBriefcaseInfo(newBriefcaseCurrencyInfo);
  }

  return (
    <div className={styles.modal} onClick={() => close(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img className={styles.img} src={shop} alt="briefcase" />
        <h2 className={styles.totalSum}>Total sum: ${numberParser(summary.toString())}</h2>
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
