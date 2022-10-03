import * as React from 'react';
import styles from "./Footer.module.scss";
import { FormattedMessage } from 'react-intl';


function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage id = "footer.copyright" />
        <span className={styles.logo}>
        </span>
      </a>
      <p>
        2320 S Wentworth Ave
      </p>
      <p>
        Chicago, IL 60616
      </p>
    </footer> 
  )
}

export default Footer