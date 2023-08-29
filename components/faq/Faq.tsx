import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { FormattedMessage } from 'react-intl';
import { Slider } from '../Main/sections/faq/slider';
import styles from './faq.module.scss';

function Faq() {
  const lang = useSelector((state:RootState) => state.lang ?? "");

  return (
    <>
      <div className={styles.faq_wrapper}> 
        <h1> <FormattedMessage id = "faq.title.h1" /> </h1>
        { [1,2,3,4,5,6,7,8].map((val, idx) => {
          return (
            <Slider 
              key={"faq_slider_"+val}
              header={<FormattedMessage id={"faq.q"+val} />}
              description={<FormattedMessage id={"faq.d"+val} />}
            />
          )
        })}
        
      </div>
    </>
  )
}

export default Faq;
