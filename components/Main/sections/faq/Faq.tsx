import * as React from 'react';
import styles from './Faq.module.scss';
import { FormattedMessage } from 'react-intl';
import { Slider } from './slider';

function Faq() {
  const add_border = {
    'border-top': '2px solid grey'
  }
  return (
    <div className={styles.faq_wrapper}>
      <h1>
        <FormattedMessage id = "main.faq.h1" />
      </h1>

      <Slider 
        header={<FormattedMessage id = "main.faq.q1" />}
        description={<FormattedMessage id = "main.faq.d1" />}
        style={add_border}
      /> 
      <Slider 
        header={<FormattedMessage id = "main.faq.q2" />}
        description={<FormattedMessage id = "main.faq.d2" />}
      /> 
      <Slider 
        header={<FormattedMessage id = "main.faq.q3" />}
        description={<FormattedMessage id = "main.faq.d3" />}
      /> 
    </div>
  )
}

export default Faq