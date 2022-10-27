import * as React from 'react';
import styles from "./Footer.module.scss";
import { FormattedMessage } from 'react-intl';


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_div}>
        <div className={styles.footer_div_left}>
          <div className={styles.footer_copyright_left_col}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              ©
              <span className={styles.logo}>
              </span>
            </a>
          </div>
          <div>
            <FormattedMessage id = "footer.copyright" />
            <p>
              2320 S Wentworth Ave
            </p>
            <p>
              Chicago, IL 60616
            </p>
          </div>
          
          
        </div>
        <div className={styles.footer_div_right}>
          <div className={styles.footer_div_right_items}> Site Map </div>
          <div className={styles.footer_div_right_items}> Terms and Conditions </div>
          <div className={styles.footer_div_right_items}> Privacy Policy </div>
          <div className={styles.footer_div_right_items}> Cookie Policy </div>
        </div>
      </div>
        
    </footer> 
  )
}

export default Footer