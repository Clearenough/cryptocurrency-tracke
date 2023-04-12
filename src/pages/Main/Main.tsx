import { useEffect, useState } from 'react';
import { IAPIResults, ICurrencyInfo } from '../../@types/common';
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Main.module.scss';

function Main() {
  const [currencyInfo, setCurrencyInfo] = useState<ICurrencyInfo[]>([]);

  useEffect(() => {
    (async function () {
      const res = await fetchData();
      setCurrencyInfo(res.data);
    })();
  }, []);

  async function fetchData(): Promise<IAPIResults> {
    const res = await fetch('https://api.coincap.io/v2/assets', {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });
    const data: IAPIResults = await res.json();
    return data;
  }

  return (
    <div className={styles.container}>
      <CurrencyTable />
      <Pagination
        onPageChange={(x) => console.log(x)}
        currentPage={1}
        totalCount={23}
        siblingCount={2}
        pageSize={10}
      />
    </div>
  );
}

export default Main;
