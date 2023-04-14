import { useEffect, useState } from 'react';

import { fetchTableInfo } from '../../API/api';

import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';
import Pagination from '../../components/Pagination/Pagination';

import { PAGE_LIMIT, PAGE_SIZE, SIBLING_COUNT } from '../../@types/constants';
import { ICurrencyInfo } from '../../@types/common';

import styles from './Main.module.scss';

function Main() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tableInfo, setTableInfo] = useState<ICurrencyInfo[]>([]);

  useEffect(() => {
    async function getTableInfo() {
      const res = await fetchTableInfo((currentPage - 1) * PAGE_SIZE, PAGE_SIZE);
      setTableInfo(res.data);
    }
    getTableInfo();
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <CurrencyTable tableInfo={tableInfo} />
      <Pagination
        onPageChange={(x) => setCurrentPage(x)}
        currentPage={currentPage}
        totalCount={PAGE_LIMIT * PAGE_SIZE}
        siblingCount={SIBLING_COUNT}
        pageSize={PAGE_SIZE}
      />
    </div>
  );
}

export default Main;
