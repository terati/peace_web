import * as React from 'react';
import styles from "./Cookie_policy.module.scss";
import type { NextPage } from 'next'
import { IntlProvider } from 'react-intl'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Link from 'next/link';

const Cookie_policy:NextPage = () => {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  const title_with_lang:string = (lang == 'zh') ? '安康藥房' : 'Peace Pharmacy';
  return (
    <>
      <div className={styles.cookie_wrapper}>
        <div className={styles.cookie_wrapper_inner}>
          <h1> Cookie Policy | 饼干政策 </h1>
          <div className={styles.cookie_statement_wrapper}>
            In development...
          </div>
        </div>
      </div>
    </>
  )
}

export default Cookie_policy