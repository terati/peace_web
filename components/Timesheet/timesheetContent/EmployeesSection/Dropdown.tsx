import * as React from 'react';
import styles from './Dropdown.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

type OptionType = {
  label: string;
  value: string;
  callback: (dataId: string) => void;
}

interface DropdownInterface {
  dataId?: string;
  options?: OptionType[];
}

const clickOptionHandler = (dataId: string, callback: (dataId: string) => void) => {
  callback(dataId);
}

export default React.forwardRef(function Dropdown(props: DropdownInterface, ref: React.ForwardedRef<HTMLDivElement>) {
  const {
    dataId = '',
    options = [],
  } = props;
  const layoverOpen = useSelector((state:RootState) => state.layover.open);

  return (
    // <span>
      <div className={styles.dropdownOptions} ref={ref}
        tabIndex={-1}
      >

        { options.map((option, _) => {
          return (
            <div className={styles.option} key={option.label}
              onClick={() => clickOptionHandler(dataId, option.callback)}
            >
              <span> {option.label} </span>
            </div>
          )
        }) }
      </div>
    // </span>
  )
})