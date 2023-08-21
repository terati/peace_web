
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { Mdx_components } from '../components/mdx_components';
// import { Mdx_components } from './components/mdx_components';
import { Provider } from 'react-redux';
import { store } from '../store/store';
// import cn from '../lang/cn.json';
// import en from '../lang/en.json';
// import { IntlProvider } from 'react-intl';
import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Provider store={store}>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="name" content="Peace Pharmacy 安康藥房 " />
            <meta name="description" content="We Peace Pharmacy, your local Pharmacy in the heart of Chicago's Chinatown"/>
          </Helmet>
          <MDXProvider components={Mdx_components}>
            <Component {...pageProps} />
          </MDXProvider> 
        </Provider>
    </>
    )
}

export default MyApp
