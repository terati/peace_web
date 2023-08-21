import * as React from 'react';
import styles from './Faq.module.scss';
import { FormattedMessage } from 'react-intl';
import { Slider } from './slider';

interface faq_props {
  id: string;
}

function Faq(props: faq_props) {
  const {
    id,
  } = props;
  const add_border = {
    'borderTop': '2px solid grey'
  }
  return (
    <div id={"section_main_faq"} className={styles.faq_wrapper}>
      <h1>
        <FormattedMessage id = "main.faq.h1" />
      </h1>

      <Slider 
        header={<FormattedMessage id = "main.faq.q4" />}
        description={<FormattedMessage id = "main.faq.d4" />}
        style={add_border}
      />
      <Slider 
        header={<FormattedMessage id = "main.faq.q1" />}
        description={<FormattedMessage id = "main.faq.d1" />}
      /> 
      <Slider 
        header={<FormattedMessage id = "main.faq.q2" />}
        description={<FormattedMessage id = "main.faq.d2" />}
      /> 
      <Slider 
        header={<FormattedMessage id = "main.faq.q3" />}
        description={<FormattedMessage id = "main.faq.d3" />}
      />  
      <Slider 
        header={<FormattedMessage id = "main.faq.q5" />}
        description={<FormattedMessage id = "main.faq.d5" />}
      />
      
    </div>
  )
}

export default Faq