import styles from './ModalBriefcase.module.scss';
import shop from './../../assets/svg/briefcase.svg';
const mock = [
  {
    name: 'asd',
    price: 123,
    quantity: 23,
    id: 0,
  },
  {
    name: 'asd',
    price: 123,
    quantity: 23,
    id: 2,
  },
  {
    name: 'asd',
    price: 123,
    quantity: 23,
    id: 3,
  },
  {
    name: 'asd',
    price: 123,
    quantity: 23,
    id: 4,
  },
];

interface IProps {
  close: () => void;
}

function ModalBriefcase({ close }: IProps) {
  const summary = mock.reduce((acc, item) => {
    return item.price * item.quantity;
  }, 0);

  function deleteCurrency(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
  }

  return (
    <div className={styles.modal} onClick={() => close()}>
      <div className={styles.modalContent}>
        <img className={styles.img} src={shop} alt="briefcase" />
        <h2 className={styles.totalSum}>Total sum: ${summary}</h2>
        <ul className={styles.currencyList}>
          {mock.map((item) => (
            <li key={item.id} className={styles.listItem}>
              <span>{item.name}</span>
              <span>{'Price:' + item.price + '$'}</span>
              <span>{'quantity:' + item.quantity}</span>
              <button className={styles.deleteButton} onClick={(e) => deleteCurrency(e)}>
                -
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ModalBriefcase;
