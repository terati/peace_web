import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Down_arrow_icon from './Down_arrow_icon';
import styles from './Slider.module.scss';

function Slider(props:any) {
  const {
    header,
    description,
    ...rest
  } = props;
  const [open, set_open] = React.useState(false);

  return (
    <>
      <div className={styles.slider_wrapper}
        onClick={() => set_open(!open)}
        {...rest}
      >
        <div className={styles.slider_header} >
          <div>
            <h2> { header } </h2>
          </div>
          <div className={`${styles.arrow_icon} ${open ? styles.icon_flipped : styles.icon_not_flipped}`}>
            <Down_arrow_icon fill={'black'} width={25} height={25} />
          </div>
        </div>
          <div className={`${styles.slider_dropdown} ${open ? styles.opened : styles.closed}`}
          >
            <p> 
              { description }
            </p>
          </div>

      </div>
    </>
  )
}

export default Slider