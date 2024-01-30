import * as React from 'react';
import styles from './Downloads.module.scss';
import Link from 'next/link';

export default function Downloads() {
  return (
    <>
      <div className={styles.downloads_wrapper}> 
        <h1> Downloads </h1>
        
        <ul> 
          <Link href="/dl/flier_zh.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer" download="flier_zh.pdf"> Peace Pharmacy Handout Flier (Chinese Version 1.2)</a>  
          </Link> 
        </ul>
        <ul>
          <Link href="" passHref>
            <a download=""> Common ingredients in OTC cough and cold medicine </a> 
          </Link>  
        </ul>
        
      </div>
    </>
  )
}