import { useParams } from 'react-router-dom';
import styles from './Info.module.scss';

const mock = {
  name: 'asd',
  price: 2,
};

function Info() {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <span>{mock.name}</span>
      <span>{mock.price}</span>
    </div>
  );
}

export default Info;
