import * as React from 'react';
import styles from './Process.module.scss';
import { FormattedMessage } from 'react-intl';
import Checkmark_icon from './Checkmark_icon';
import Image from 'next/image';

interface process_props {
  id: string;
}

function Process(props: process_props) {
  const {
    id
  } = props;
  const size = 30;
  const color = "black";

  return (
    <div id={id} className={styles.process_wrapper}>
      <h2> <FormattedMessage id="main.process.h2" /> </h2>
      <p> <FormattedMessage id="main.process.p" /> </p>
      <div className={styles.process_inner_wrapper}> 

        <div className={styles.process_inner_wrapper_left}>
          <h3> <FormattedMessage id="main.process.left_title.h3" /> </h3>
          <div className={styles.process_inner_wrapper_row_wrapper}> 
            <div className={styles.process_inner_wrapper_row_icon}> 
              <Checkmark_icon height={size} width={size} fill={color}/>
            </div>
            <div className={styles.process_inner_wrapper_row_content}>
             <FormattedMessage id="main.process.left_content1" />
            </div>
          </div>
          <div className={styles.process_inner_wrapper_row_wrapper}> 
            <div className={styles.process_inner_wrapper_row_icon}> 
              <Checkmark_icon height={size} width={size} fill={color}/>
            </div>
            <div className={styles.process_inner_wrapper_row_content}>
             <FormattedMessage id="main.process.left_content2" />
            </div>
          </div>
          <div className={styles.process_inner_wrapper_row_wrapper}> 
            <div className={styles.process_inner_wrapper_row_icon}> 
              <Checkmark_icon height={size} width={size} fill={color}/>
            </div>
            <div className={styles.process_inner_wrapper_row_content}>
              <FormattedMessage id="main.process.left_content3" />
            </div>
          </div>
          <div className={styles.process_inner_wrapper_row_wrapper}> 
            <div className={styles.process_img_wrapper}> 
              <Image
                src={"/insurance.jpg"}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={"/insurance.jpg"}
                alt="New visitor requirements image"
              />
            </div>
          </div>
        </div>

        <div className={styles.process_inner_wrapper_right}>
          <h3> <FormattedMessage id="main.process.right_title.h3" /> </h3>
          <div className={styles.process_inner_wrapper_row_wrapper}> 
            <div className={styles.process_inner_wrapper_row_icon}> 
              <Checkmark_icon height={size} width={size} fill={color}/>
            </div>
            <div className={styles.process_inner_wrapper_row_content}>
              <FormattedMessage id="main.process.right_content1" />
            </div>
          </div>
          <div className={styles.process_inner_wrapper_row_wrapper}> 
            <div className={styles.process_inner_wrapper_row_icon}> 
              <Checkmark_icon height={size} width={size} fill={color}/>
            </div>
            <div className={styles.process_inner_wrapper_row_content}>
              <FormattedMessage id="main.process.right_content2" />
            </div>
          </div>
          <div className={styles.process_inner_wrapper_row_wrapper}> 
            <div className={styles.process_inner_wrapper_row_icon}> 
              <Checkmark_icon height={size} width={size} fill={color}/>
            </div>
            <div className={styles.process_inner_wrapper_row_content}>
              <FormattedMessage id="main.process.right_content3" />
            </div>
          </div>
          <div className={styles.process_inner_wrapper_row_wrapper}> 
            <div className={styles.process_img_wrapper}> 
              <Image
                src={"/family.jpg"} 
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={"/family.jpg"}
                alt="Returning visitor requirements image"
              />
            </div>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Process