import Link from 'next/link';
import * as React from 'react';
import Logo from '../Main/icons/Logo';
import styles from './Blogpost_navbar.module.scss';

function Blogpost_navbar() {
  return (
    <nav>
      <div className={styles.blogpost_navbar_wrapper}>
        <div className={styles.blogpost_navbar_inner}>
          <Link href="/">
            <Logo fill="white" height={"50px"} width={"100%"}/>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Blogpost_navbar