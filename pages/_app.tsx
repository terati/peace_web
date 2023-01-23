
import '../styles/globals.css'
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
            <meta name="name" content="安康藥房 Peace Pharmacy" />
            <meta name="description" content="Website for Chicago Peace Pharmacy"/>
          </Helmet>
          <MDXProvider components={Mdx_components}>
            <Component {...pageProps} />
          </MDXProvider> 
        </Provider>
    </>
    )
}

export default MyApp
