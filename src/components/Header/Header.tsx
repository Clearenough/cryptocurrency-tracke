import styles from './Header.module.scss';
import shop from './../../assets/svg/briefcase.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.currencyList}>
          <li>Bitcoin: 123$</li>
          <li>Bitcoin: 123$</li>
          <li>Bitcoin: 123$</li>
        </ul>
        <div className={styles.briefcase}>
          <img src={shop} alt="briefcase" className={styles.briefcaseImg} />
          <span className={styles.briefcaseDiff}> 134,32 USD +2,38 (1,80 %) </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
