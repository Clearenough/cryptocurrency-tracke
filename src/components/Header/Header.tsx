import { useContext, useState } from 'react';
import { BriefcaseContext } from '../../context/briefcaseContext';
import { CurrencyContext } from '../../context/currencyContext';

import ModalBriefcase from '../common/modals/modalBriefcase/ModalBriefcase';

import { numberParser } from '../../utils/numberParser';
import { totalBriefcaseSum } from '../../utils/briefcaseSumsInfo';
import { briefcaseCurrencyDifference } from '../../utils/briefcaseCurrencyDiff';

import shop from './../../assets/svg/briefcase.svg';

import styles from './Header.module.scss';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currencyInfo } = useContext(CurrencyContext);
  const { briefcaseState } = useContext(BriefcaseContext);
  const { currentBriefcaseSummary, briefcaseSummary } = totalBriefcaseSum(
    briefcaseState.briefcaseInfo,
    currencyInfo
  );
  const percentDiff = briefcaseCurrencyDifference(currentBriefcaseSummary, briefcaseSummary);
  const absoluteDiff = currentBriefcaseSummary - briefcaseSummary;
  const popularCurrency = currencyInfo.slice(0, 3);

  const showPlus = absoluteDiff >= 0 ? '+' : '';

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
            {`${numberParser(currentBriefcaseSummary.toString())} USD ${showPlus} ${numberParser(
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
