import { useEffect, useState } from 'react';

import { fetchTableInfo } from '../../API/api';

import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';
import Pagination from '../../components/Pagination/Pagination';

import { PAGE_LIMIT, PAGE_SIZE, SIBLING_COUNT } from '../../@types/constants';
import { ICurrencyInfo } from '../../@types/common';

import styles from './Main.module.scss';
import LoadingScreen from '../../components/common/loading/LoadingScreen';
import APIError from '../../components/common/error/APIError';

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tableInfo, setTableInfo] = useState<ICurrencyInfo[]>([]);

  useEffect(() => {
    setIsLoading(true);
    async function getTableInfo() {
      const res = await fetchTableInfo((currentPage - 1) * PAGE_SIZE, PAGE_SIZE);
      setError(res.error);
      setTableInfo(res.data);
    }
    getTableInfo().then(() => setIsLoading(false));
  }, [currentPage]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <LoadingScreen />
      ) : error ? (
        <APIError message={error} />
      ) : (
        <>
          <CurrencyTable tableInfo={tableInfo} />
          <Pagination
            onPageChange={(x) => setCurrentPage(x)}
            currentPage={currentPage}
            totalCount={PAGE_LIMIT * PAGE_SIZE}
            siblingCount={SIBLING_COUNT}
            pageSize={PAGE_SIZE}
          />
        </>
      )}
    </div>
  );
}

export default Main;
