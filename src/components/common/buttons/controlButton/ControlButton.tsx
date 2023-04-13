import styles from './ControlButton.module.scss';

interface IProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: 'ADD' | 'DELETE';
}

function ControlButton({ type, ...props }: IProps) {
  return (
    <button {...props} className={type === 'ADD' ? styles.addButton : styles.deleteButton}>
      {type === 'ADD' ? '+' : '-'}
    </button>
  );
}

export default ControlButton;
