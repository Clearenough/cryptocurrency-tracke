import styles from './Header.module.scss';
import shop from './../../assets/svg/briefcase.svg';
import { useContext, useState } from 'react';
import ModalBriefcase from '../common/modals/modalBriefcase/ModalBriefcase';
import { CurrencyContext } from '../../context/currencyContext';
import { numberParser } from '../../utils/numberParser';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currencyInfo } = useContext(CurrencyContext);
  const popularCurrency = currencyInfo.slice(0, 3);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.currencyList}>
          {popularCurrency.map((currency) => (
            <li key={currency.id}>{`${currency.name}: ${numberParser(currency.priceUsd)}$`}</li>
          ))}
        </ul>
        <div className={styles.briefcase}>
          <img
            src={shop}
            alt="briefcase"
            className={styles.briefcaseImg}
            onClick={() => setIsModalOpen(true)}
          />
          <span className={styles.briefcaseDiff}> 134,32 USD +2,38 (1,80 %) </span>
        </div>
        {isModalOpen && <ModalBriefcase close={setIsModalOpen} />}
      </div>
    </header>
  );
}

export default Header;
