import * as React from 'react';
import styles from './SelectBase.module.scss';
import { ArrowDropDown, DomainVerification } from '@mui/icons-material';
import { CSSTransition } from 'react-transition-group';
import { TIMEOPTIONS } from './TimeOptions';

type OptionType = {
  value: string | number;
  label: string | number;
}

interface SelectBaseInterface {
  changeCallback?: (key: string, val: string) => void;
  dataId?: string;
  onChange? : (value: string) => void;
  options?: OptionType[];
  type?: 'time' | string | null;
  value?: string;
}

export default function SelectBase(props: SelectBaseInterface) {
  let {
    changeCallback,
    dataId = '',
    onChange, 
    options,
    type,
    value,
  } = props;

  options = (type=='time') ? TIMEOPTIONS : options;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  // const [inputValue, setInputValue] = React.useState<string | number>('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);
  const [internalValue, setInternalValue] = React.useState<string | undefined>(value);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (optionsRef.current && optionsRef.current!=e.relatedTarget) {
      setIsOpen(false);
    }
  }

  const optionChooseClick = (e: any, value: string | number, label: string) => {
    // if (changeCallback) changeCallback(dataId, String(value));
    if (onChange) onChange(String(value))
    setInternalValue(label);
    
    // if(onClick) onClick(e);
    // console.log("CHOOSE OPTION");
    setIsOpen(false);
  }

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen((prev: boolean) => !prev);
  }

  const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select(); 
  }

  const selectOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
  }

  return (
    <>
      
        <div className={styles.selectWrapper}
          onBlur={handleBlur}
        >
          <label>
            <span>
              <input className={styles.select}
                type={'text'}
                onChange={selectOnChangeHandler}
                onClick={onClickHandler}
                onFocus={onFocusHandler}
                value={internalValue}
                ref={inputRef}
                // tabIndex={-1}
              /> 
              <span className={styles.carrot}>
                <ArrowDropDown />
              </span>
            </span>
          </label>
          <CSSTransition
            in={isOpen}
            timeout={300}
            classNames={{
              appear: styles['select-appear'],
              appearActive: styles['select-active-appear'],
              enter: styles['select-enter'],
              enterActive: styles['select-enter-active'],
              exit: styles['select-exit'],
              exitActive: styles['select-exit-active']
            }}
            unmountOnExit
          >
            <div className={styles.options}
              ref={optionsRef}
              tabIndex={-1}
            >
                {/* empty value choice */}
                <div className={styles.option}
                  onClick={(e) => optionChooseClick(e, ' ')}
                > </div>
              { options?.map((option) => {
                
                if ( option.value && String(option.label).toLowerCase().includes(String(internalValue).toLowerCase())
                  || (internalValue=='' || internalValue==undefined) 
                ) return (
                  <div className={styles.option}
                    onClick={e => optionChooseClick(e, option.value, option.label)}
                  >
                    {option.label}
                  </div>
                )})
              }
            </div>
          </CSSTransition>
        </div>
    </>
    
  )
}