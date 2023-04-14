import { useContext, useEffect, useState } from 'react';
import { BriefcaseContext } from '../../context/briefcaseContext';
import { CurrencyContext } from '../../context/currencyContext';

import ModalBriefcase from '../common/modals/modalBriefcase/ModalBriefcase';

import { numberParser } from '../../utils/numberParser';
import { briefcaseCurrencyDifference } from '../../utils/briefcaseCurrencyDiff';

import shop from './../../assets/svg/briefcase.svg';

import styles from './Header.module.scss';
import { fetchCurrencyInfo } from '../../API/api';
import { IAPICurrency } from '../../@types/common';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [percentDiff, setPercentDiff] = useState(0);
  const [absoluteDiff, setAbsoluteDiff] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const { currencyInfo } = useContext(CurrencyContext);
  const { briefcaseState } = useContext(BriefcaseContext);
  const popularCurrency = currencyInfo.slice(0, 3);

  const showPlus = absoluteDiff >= 0 ? '+' : '';

  useEffect(() => {
    const fetchCurrency = async () => {
      const currencyPromises: Promise<IAPICurrency>[] = [];
      briefcaseState.briefcaseInfo.forEach(async ({ id }) => {
        const res = fetchCurrencyInfo(id);
        currencyPromises.push(res);
      });
      Promise.all(currencyPromises).then((values) => {
        const prices = values.map((value) => {
          const quantity = briefcaseState.briefcaseInfo.find(
            (currency) => currency.id === value.data.id
          )!.quantity;
          return +quantity * +value.data.priceUsd;
        });
        const currentPrise = prices.reduce((acc, price) => acc + price, 0);
        const initialPrice = briefcaseState.briefcaseInfo.reduce(
          (acc, currency) => acc + +currency.priceUsd * +currency.quantity,
          0
        );
        setCurrentPrice(currentPrise);
        setPercentDiff(briefcaseCurrencyDifference(currentPrise, initialPrice));
        setAbsoluteDiff(currentPrise - initialPrice);
      });
    };

    fetchCurrency();
  }, [JSON.stringify(briefcaseState.briefcaseInfo)]);

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
            {`${numberParser(currentPrice.toString())} USD ${showPlus} ${numberParser(
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
