import * as React from 'react';
import styles from "./Footer.module.scss";
import { FormattedMessage } from 'react-intl';
import Logo from '../../icons/Logo';


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
              
              <span className={styles.logo}>
              </span>
            </a>
          </div>
          
          <div>
            <Logo fill={"white"} />
            <h3>
              © <FormattedMessage id = "footer.copyright" />
            </h3>
            
          </div>
          
          
        </div>
        <div className={styles.footer_div_right}>
          <div className={styles.footer_div_right_items}> 
            <FormattedMessage id={"footer.site_map"} /> 
          </div>
          <div className={styles.footer_div_right_items}> 
            <FormattedMessage id={"footer.terms_and_conditions"} /> 
          </div>
          <div className={styles.footer_div_right_items}>
            <FormattedMessage id={"footer.privacy_policy"} />
          </div>
          <div className={styles.footer_div_right_items}>
            <FormattedMessage id={"footer.cookie_policy"} />
          </div>
        </div>
        
      </div>
        
    </footer> 
  )
}

export default Footer