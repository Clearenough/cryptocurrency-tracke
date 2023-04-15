import styles from './APIError.module.scss';

interface IAPIErrorProps {
  message: string;
}

function APIError({ message }: IAPIErrorProps) {
  return <h2 className={styles.error}>{message}</h2>;
}

export default APIError;
