import * as React from 'react';
import { Navigation } from '../../components/Main/navigation';
import { Footer } from '../../components/Main/sections/footer';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Helmet } from 'react-helmet';
import en from '../../lang/en.json';
import { Component404 } from '../../components/component404';
import BarcodeTranslator from '../../components/barcode_translator/BarcodeTranslator';

export default function Custom404() {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  return (
    <>
      <IntlProvider locale={lang} defaultLocale={lang} messages={en}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="name" content="Peace Pharmacy 安康藥房 " />
          <meta name="description" content="Sorry, the page you requested does not exist. Please navigate to our homepage or site map."/>
          <meta name="og:description" content="Sorry, the page you requested does not exist. Please navigate to our homepage or site map."/>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <meta http-equiv="content-language" content="en-us"></meta>
          <meta name="_csrfHeader" content="X-XSRF-TOKEN"></meta>
        </Helmet>
        {/* <Provider store={store}> */}
          <Navigation />
            <BarcodeTranslator />
          <Footer />
        {/* </Provider> */}
      </IntlProvider>
    </>
  )
}