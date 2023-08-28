import * as React from 'react';
import Image from 'next/image';
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
        <div className={styles.map_img_wrapper}>
          <a href={'https://www.google.com/maps/place/Peace+Pharmacy/@41.8503467,-87.6346893,17z/data=!3m1!4b1!4m6!3m5!1s0x880e2c6474826d1d:0x416673644a8f76ba!8m2!3d41.8503467!4d-87.6321144!16s%2Fg%2F1vxcw_k9?entry=ttu'}
            target="_blank"
          >
            <Image 
              src={"/map_dark_annotated.PNG"}
              layout="fill"
              objectFit="cover"
              objectPosition={"50% 50%"}
              alt={"Map of peace pharmacy"}
            />
          </a>
        </div>
        
        {/* <img src={"/map_dark_annotated.PNG"} /> */}
      </div>
    </div>
  )
}

export default Location