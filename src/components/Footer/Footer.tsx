import { useTranslation } from 'react-i18next';

import styles from './Footer.module.scss';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2>{t('footer.project_name')}</h2>
      </div>
    </footer>
  );
}

export default Footer;
