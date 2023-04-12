import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';
import ModalAddCurrency from '../../components/ModalAddCurrency/ModalAddCurrency';
import ModalBriefcase from '../../components/ModalBriefcase/ModalBriefcase';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Main.module.scss';

function Main() {
  const mock = {
    changePercent24Hr: '3.528',
    explorer: 'https://blockchain.info/',
    id: 'bitcoin',
    marketCapUsd: '5845',
    maxSupply: '21000',
    name: 'Bitcoin',
    priceUsd: '30219',
    rank: '1',
    supply: '19342',
    symbol: 'BTC',
    volumeUsd24Hr: '77931',
    vwap24Hr: '29891',
  };

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
      <ModalBriefcase
        close={function (): void {
          throw new Error('Function not implemented.');
        }}
      ></ModalBriefcase>
    </div>
  );
}

export default Main;
