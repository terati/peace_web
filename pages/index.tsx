
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Main } from '../components/Main';
import { Helmet } from 'react-helmet';
import { Analytics } from '@vercel/analytics/react';
import * as React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from '../store/store';
import getConfig from 'next/config';
// const { publicRuntimeConfig } = getConfig();

const ogImageUrl = `/peace_pharmacy_icon.PNG`;

const Home: NextPage = () => {

  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="name" content="Peace Pharmacy 安康藥房 " />
        <meta name="description" content="We are Peace Pharmacy, your local Pharmacy in the heart of Chicago's Chinatown"/>
        <meta name="og:description" content="We are Peace Pharmacy, your local Pharmacy in the heart of Chicago's Chinatown"/>
        <meta name="keywords" content="peace pharmacy, chicago peace pharmacy, chicago pharmacy, peace pharmacy chicago" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta http-equiv="content-language" content="en-us"></meta>
        <meta name="_csrfHeader" content="X-XSRF-TOKEN"></meta>
        <meta name="google-site-verification" content="XETCqDUhxJbODAPBLgeafVwNy_kBnZkjNvoNoR5V6eA"/>
        <meta name="og:image" content={ogImageUrl}></meta>
        <title> Peace Pharmacy 安康藥房 </title>
      </Helmet>
      <div className={styles.container}>
        <Analytics />
        <Main />
      </div>
      
    
    </Provider>
  )
}

export default Home
