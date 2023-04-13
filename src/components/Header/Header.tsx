import styles from './Header.module.scss';
import shop from './../../assets/svg/briefcase.svg';
import { useContext, useState } from 'react';
import ModalBriefcase from '../common/modals/modalBriefcase/ModalBriefcase';
import { CurrencyContext } from '../../context/currencyContext';
import { numberParser } from '../../utils/numberParser';
import { BriefcaseContext } from '../../context/briefcaseContext';
import { totalBriefcaseSum } from '../../utils/briefcaseSumsInfo';
import { briefcaseCurrencyDifference } from '../../utils/briefcaseCurrencyDiff';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currencyInfo } = useContext(CurrencyContext);
  const { briefcaseInfo } = useContext(BriefcaseContext);
  const { currentBriefcaseSummary, briefcaseSummary } = totalBriefcaseSum(
    briefcaseInfo,
    currencyInfo
  );
  const percentDiff = briefcaseCurrencyDifference(currentBriefcaseSummary, briefcaseSummary);
  console.log('percent diff', percentDiff);
  const absoluteDiff = currentBriefcaseSummary - briefcaseSummary;
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
          <span className={styles.briefcaseDiff}>
            {`${numberParser(currentBriefcaseSummary.toString())} USD +${numberParser(
              absoluteDiff.toString()
            )}(${numberParser(percentDiff.toString())} %)`}
          </span>
        </div>
        {isModalOpen && <ModalBriefcase close={setIsModalOpen} />}
      </div>
    </header>
  );
}

export default Header;
