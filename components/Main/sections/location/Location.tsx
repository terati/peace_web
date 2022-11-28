import * as React from 'react';
import styles from './Location.module.scss';
import { FormattedMessage } from 'react-intl';
import useInterSection from './useInterSection';

function Location() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inViewport = useInterSection(ref, '0px');

  React.useEffect(() => {
    // console.log(inViewport); 
  }, [inViewport])

  return (
    <div className={styles.location_wrapper}>
      <h2 className={styles.h2_location_wrapper_heading}> 
        <FormattedMessage id="main.location.h2" />
      </h2>
      <div className={styles.location_map} ref={ref}>
        <div className={`${styles.location_float_bar} ${inViewport ? styles.animate_bar : ''} `}>
          <div className={`${styles.location_float_bar_left} `}>
            <img src={"/peace_pharmacy_icon.PNG"} height={70}/>
          </div>
          <div className={styles.location_float_bar_right}>
            <div className={styles.location_address_wrapper}>
              <h2> 2320 S Wentworth Ave </h2>
              <h2> Chicago, IL 60616 </h2>
            </div>
          </div>
        </div>
        <img src={"/map_dark_annotated.PNG"} />
      </div>
    </div>
  )
}

export default Location