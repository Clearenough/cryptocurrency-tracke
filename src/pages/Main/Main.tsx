import { useEffect, useState } from 'react';
import { IAPIResults, ICurrencyInfo } from '../../@types/common';
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Main.module.scss';

function Main() {
  const [currencyInfo, setCurrencyInfo] = useState<ICurrencyInfo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const PAGE_SIZE = 8;
  const SIBLING_COUNT = 2;

  useEffect(() => {
    (async function () {
      const res = await fetchData();
      setCurrencyInfo(res.data);
    })();
  }, []);

  async function fetchData(): Promise<IAPIResults> {
    const res = await fetch('https://api.coincap.io/v2/assets', {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_COINCAP_API_KEY}`,
      },
    });
    const data: IAPIResults = await res.json();
    return data;
  }

  return (
    <div className={styles.container}>
      <CurrencyTable />
      <Pagination
        onPageChange={(x) => setCurrentPage(x)}
        currentPage={currentPage}
        totalCount={currencyInfo.length}
        siblingCount={SIBLING_COUNT}
        pageSize={PAGE_SIZE}
      />
    </div>
  );
}

export default Main;
