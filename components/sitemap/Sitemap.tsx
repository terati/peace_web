import * as React from 'react';
import type { NextPage } from 'next'
import { IntlProvider } from 'react-intl'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Sitemap.module.scss';
import Link from 'next/link';

const Sitemap:NextPage = () => {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  const title_with_lang:string = (lang == 'zh') ? '安康藥房' : 'Peace Pharmacy';
  return (
    <>
      <div className={styles.sitemap_wrapper}>
        <div className={styles.sitemap_wrapper_inner}> 
          <h1> 站点地图 | Site Map </h1>
          <div className={styles.underline}></div>
          <Link href={"/"}>
            <p> 安康藥房首页 | Peace Pharmacy Home </p>
          </Link>
          <div className={styles.underline}></div>
          <Link href={"/blog/en/high_blood_pressure"}>
            <p> Blog - High Blood Pressure: Understanding the Silent Killer </p>
          </Link>
          <div className={styles.underline}></div>
          <Link href={"/blog/en/high_blood_pressure"}>
            <p> 博客 - 高血压——了解沉默的杀手 </p>
          </Link>
          <div className={styles.underline}></div>
          <Link href={"/blog/en/generic_drugs_questions_and_answers"}>
            <p> Blog - Generic Drugs: Questions & Answers </p>
          </Link>
          <div className={styles.underline}></div>
          <Link href={"/blog/zh/generic_drugs_questions_and_answers"}>
            <p> 博客 - 仿制药：问题与解答 </p>
          </Link>
          <div className={styles.underline}></div>
          <Link href={"/blog/en/is_your_hand_sanitizer_on_fda_list_of_products_you_should_not_use"}>
            <p> Blog - Is Your Hand Sanitizer on FDA’s List of Products You Should Not Us? </p>
          </Link>
          <div className={styles.underline}></div>
          <Link href={"/blog/zh/is_your_hand_sanitizer_on_fda_list_of_products_you_should_not_use"}>
            <p> 博客 - 你的洗手液是否在美国食品及药物管理局禁止使用的产品清单上? </p>
          </Link>
          <div className={styles.underline}></div>
          <Link href={"/sitemap"}>
            <p> 站点地图 | Sitemap </p>
          </Link>
          <div className={styles.underline}></div>
          <Link href={"/terms_and_conditions"}>
            <p> 条款及细则 | Terms and Conditions </p>
          </Link>
          <div className={styles.underline}></div>
          <Link href={"/privacy_policy"}>
            <p> 隐私政策 | Privacy Policy </p>
          </Link>
          <div className={styles.underline}></div>
          <Link href={"/cookie_policy"}>
            <p> 饼干政策 | Cookie Policy </p>
          </Link>
          <div className={styles.underline}></div>
        </div>
      </div>
    </>
  )
}

export default Sitemap;