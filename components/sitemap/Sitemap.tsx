import * as React from 'react';
import type { NextPage } from 'next'
import { IntlProvider } from 'react-intl'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Sitemap.module.scss';


const Sitemap:NextPage = () => {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  const title_with_lang:string = (lang == 'zh') ? '安康藥房' : 'Peace Pharmacy';
  return (
    <>
      <div className={styles.sitemap_wrapper}>
        <h1> Site Map </h1>
      </div>
    </>
  )
}

export default Sitemap;