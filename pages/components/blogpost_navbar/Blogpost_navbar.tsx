import Link from 'next/link';
import * as React from 'react';
import Logo from '../../main/icons/Logo';
import styles from './Blogpost_navbar.module.scss';

function Blogpost_navbar() {
  return (
    <div className={styles.blogpost_navbar_wrapper}>
      <div className={styles.blogpost_navbar_inner}>
        <Link href="/">
          <Logo fill="white" height={"50px"} width={"200px"}/>
        </Link>
      </div>
    </div>
  )
}

export default Blogpost_navbar