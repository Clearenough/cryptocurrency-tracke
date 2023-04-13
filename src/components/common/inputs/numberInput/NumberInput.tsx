import styles from './NumberInput.module.scss';

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function NumberInput({ value, ...props }: IProps) {
  return (
    <input
      {...props}
      type="number"
      name="currencyAmount"
      placeholder="Enter amount"
      step={0.001}
      value={value}
      className={styles.input}
    />
  );
}

export default NumberInput;
