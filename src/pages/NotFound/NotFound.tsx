import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return <>{t('page_404.not_found')}</>;
}

export default NotFound;
