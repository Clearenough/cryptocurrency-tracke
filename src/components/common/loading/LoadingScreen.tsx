import styles from './Loadingscreen.module.scss';

function LoadingScreen() {
  return (
    <div className={styles.modal}>
      <div className={styles.loading}></div>
    </div>
  );
}

export default LoadingScreen;
