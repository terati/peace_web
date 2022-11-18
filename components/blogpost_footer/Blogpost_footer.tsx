import * as React from 'react';
import styles from './Blogpost_footer.module.scss';
import { FormattedMessage } from 'react-intl';
import Logo from '../Main/icons/Logo';
import Link from 'next/link';

function Blogpost_footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_inner_container}>
          <div className={styles.footer_logo_wrapper}>
            <Link href={"/"}>
              <Logo width={"150px"} height={"100%"} fill={"white"}/>
            </Link>
            
          </div>

          <p> © 2022 和平药房。 版权所有。 </p>
          <span className={styles.logo}>
          </span>
          <div className={styles.blog_footer_options_wrapper}> 
            <div className={styles.blog_footer_option}>
              <FormattedMessage id={"footer.site_map"} /> 
            </div>
            <div className={styles.blog_footer_option}>
              <FormattedMessage id={"footer.terms_and_conditions"} /> 
            </div>
            <div className={styles.blog_footer_option}>
              <FormattedMessage id={"footer.privacy_policy"} />
            </div>
            <div className={styles.blog_footer_option}>
              <FormattedMessage id={"footer.cookie_policy"} />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Blogpost_footer