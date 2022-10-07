import * as React from 'react';
import { Blogpost_footer } from '../blogpost_footer';
import { Blogpost_navbar } from '../blogpost_navbar';
import Link from 'next/link';
import styles from './BlogPost.module.scss';

function BlogPost(props:any) {
  const {
    children,
    meta
  } = props;
  return (
    <>
      <title> Peace Pharmacy </title>
      <Blogpost_navbar />
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <h1> Yo wats good! </h1>
          <article>
            {children}
          </article>
        </div>
        
      </div>
      <Blogpost_footer />
      
    </>
  )
}

export default BlogPost