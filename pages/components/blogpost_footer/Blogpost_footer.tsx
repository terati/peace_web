import * as React from 'react';
import styles from './Blogpost_footer.module.scss';
import { FormattedMessage } from 'react-intl';

function Blogpost_footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_inner_container}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p> © 2022 和平药房。 版权所有。 </p>
            <span className={styles.logo}>
            </span>
          </a>
          <p>
            2320 S Wentworth Ave
          </p>
          <p>
            Chicago, IL 60616
          </p>
        </div>
      </div>
    </>
  )
}

export default Blogpost_footer