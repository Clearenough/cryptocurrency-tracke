import classNames from 'classnames';

import styles from './ControlButton.module.scss';

interface IControlButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: 'ADD' | 'DELETE';
}

function ControlButton({ type, ...props }: IControlButtonProps) {
  const btnClass = classNames({
    [styles.addButton]: type === 'ADD',
    [styles.deleteButton]: type === 'DELETE',
  });

  return (
    <button {...props} className={btnClass}>
      {type === 'ADD' ? '+' : '-'}
    </button>
  );
}

export default ControlButton;
