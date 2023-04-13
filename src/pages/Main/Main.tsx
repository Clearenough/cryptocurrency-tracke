import { useContext, useEffect, useState } from 'react';
import { PAGE_SIZE, SIBLING_COUNT } from '../../@types/constants';
import { fetchData } from '../../API/api';
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';
import Pagination from '../../components/Pagination/Pagination';
import { CurrencyContext } from '../../context/currencyContext';
import { tableInfo } from '../../utils/currentTableInfo';
import styles from './Main.module.scss';

function Main() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { currencyInfo, setCurrencyInfo } = useContext(CurrencyContext);

  useEffect(() => {
    (async function () {
      const res = await fetchData();
      setCurrencyInfo(res.data);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <CurrencyTable tableInfo={tableInfo(currencyInfo, currentPage, PAGE_SIZE)} />
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
