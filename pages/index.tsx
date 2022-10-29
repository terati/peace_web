
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Main } from '../components/Main';

import { Provider, useSelector } from 'react-redux';
import { store } from '../store/store';

const Home: NextPage = () => {
  return (
    <Provider store={store}>
    
      <div className={styles.container}>
        <Main />
      </div>
    
    </Provider>
  )
}

export default Home
