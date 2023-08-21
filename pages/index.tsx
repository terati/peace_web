
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Main } from '../components/Main';
import { Helmet } from 'react-helmet';

import { Provider, useSelector } from 'react-redux';
import { store } from '../store/store';

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="name" content="Peace Pharmacy 安康藥房 " />
        <meta name="description" content="We Peace Pharmacy, your local Pharmacy in the heart of Chicago's Chinatown"/>
        <meta name="og:description" content="We Peace Pharmacy, your local Pharmacy in the heart of Chicago's Chinatown"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta http-equiv="content-language" content="en-us"></meta>
        <meta name="_csrfHeader" content="X-XSRF-TOKEN"></meta>
        <meta name="google-site-verification" content="XETCqDUhxJbODAPBLgeafVwNy_kBnZkjNvoNoR5V6eA"/>
        <title> Peace Pharmacy 安康藥房 </title>
      </Helmet>
      <div className={styles.container}>
        <Main />
      </div>
      
    
    </Provider>
  )
}

export default Home
