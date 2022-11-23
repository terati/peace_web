import * as React from 'react';
import styles from "./Footer.module.scss";
import { FormattedMessage } from 'react-intl';
import Logo from '../../icons/Logo';
import Link from 'next/link';

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
            <p>
              © <FormattedMessage id = "footer.copyright" />
            </p>
            
          </div>
          
          
        </div>
        <div className={styles.footer_div_right}>
          <div className={styles.footer_div_right_items}> 
            <Link href={'/sitemap'}>
              <p>
                <FormattedMessage id={"footer.site_map"} />
              </p>
            </Link>
          </div>
          <div className={styles.footer_div_right_items}>
            <Link href={'/terms_and_conditions'}>
              <p>
                <FormattedMessage id={"footer.terms_and_conditions"} /> 
              </p>
            </Link>
          </div>
          <div className={styles.footer_div_right_items}>
            <Link href={'/privacy'}>
              <p>
                <FormattedMessage id={"footer.privacy_policy"} />
              </p>
            </Link>
          </div>
          <div className={styles.footer_div_right_items}>
            <Link href={'/cookie'}>
              <p>
                <FormattedMessage id={"footer.cookie_policy"} />
              </p>
            </Link>
          </div>
        </div>
        
      </div>
        
    </footer> 
  )
}

export default Footer