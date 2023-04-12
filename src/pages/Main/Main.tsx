import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Main.module.scss';

function Main() {
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
