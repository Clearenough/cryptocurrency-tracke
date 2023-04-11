import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';
import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.container}>
      <CurrencyTable />
    </div>
  );
}

export default Main;
