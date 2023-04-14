import styles from './ControlButton.module.scss';

interface IControlButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: 'ADD' | 'DELETE';
}

function ControlButton({ type, ...props }: IControlButtonProps) {
  return (
    <button {...props} className={type === 'ADD' ? styles.addButton : styles.deleteButton}>
      {type === 'ADD' ? '+' : '-'}
    </button>
  );
}

export default ControlButton;
