import * as React from 'react';
import styles from './Input.module.scss';

interface InputInterface {
  placeholder?: string;
  dataId?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  validator?: () => void;
  value?: string;
  changeCallback?: (key: string, val: string) => void;
}

const Input = React.forwardRef((props:InputInterface, ref:React.ForwardedRef<HTMLInputElement>) => {
  const {
    dataId = '',
    onChange, 
    placeholder = '',
    validator = (val:string) => {return true},
    value = '',
    changeCallback,
  } = props;

  const [isValid, setIsValid] = React.useState<boolean>(true);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (changeCallback) changeCallback(dataId, e.target.value);
    if (onChange) onChange(e);
    if (validator(e.target.value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  return (
    <span className={styles.wrapper}>
      <input ref={ref} className={`${isValid ? styles.valid : styles.invalid}`} 
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
      />
    </span>
  )
})

export default Input; 