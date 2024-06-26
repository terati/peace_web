import * as React from 'react';
import styles from './Switch.module.scss';

type SwitchSizeType = 'small' | 'regular' | 'large';

interface SwitchInterface { 
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
  size?: SwitchSizeType; 
}

const Switch = (props: SwitchInterface) => {
  const {
    checked = false,
    onChange = () => {},
    disabled = false,
    size = 'regular',
    ...rest
  } = props;

  let switchHeight = 0, handleDiameter = 0; 
  const [pos, setPos] = React.useState<number>(4);

  if (size=='small') {
    switchHeight = 20;
    handleDiameter = 16
  } else if (size=='regular') {
    switchHeight = 24;
    handleDiameter = 20;
  } else if (size=='large') {
    switchHeight = 28;
    handleDiameter = 24;
  }
  
  const bgStyle = {
    backgroundColor: (checked) ? "#1677ff" : "grey",
  }

  const handleStyle = {
    top: Math.max(0, (switchHeight-handleDiameter)/2),
    left: (switchHeight-handleDiameter)/2,
    transform: `translateX(${pos}px)`, 
  }

  const toggleHandler = () => {
    if (onChange) onChange();
  }

  React.useEffect(() => {
    if (checked) {
      setPos(50-handleDiameter-4);
    } else {
      setPos(2); 
    }
  }, [checked])

  return (
    <span>
      <div className={styles.switch}>
        <div className={styles.switchBg}
          onMouseDown={e => e.preventDefault()}
          onClick={toggleHandler}
          style={bgStyle}
        ></div>
        <div className={styles.handle}
          style={handleStyle}
          // onClick={e => e.preventDefault()}
        ></div>
        <input 
          disabled={disabled}
          checked={checked}
          type="checkbox"
          role="switch"
          {...rest}
        />
      </div>
    </span>
  )
}

export default Switch;