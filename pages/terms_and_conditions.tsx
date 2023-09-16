import * as React from 'react';
import { Navigation } from '../components/Main/navigation';
import { Footer } from '../components/Main/sections/footer';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import cn from '../lang/cn.json';
import en from '../lang/en.json';
import { TermsAndConditions } from '../components/terms_and_conditions';
import { Helmet } from 'react-helmet';

export default function Sitemap_Page() {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  return (
    <>
      <IntlProvider locale={lang} defaultLocale={lang} messages={(lang=='zh') ? cn : en}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="name" content="Peace Pharmacy 安康藥房 " />
          <meta name="description" content="Review our terms of service to understand the rules and guidelines for using our website."/>
          <meta name="og:description" content="Review our terms of service to understand the rules and guidelines for using our website."/>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <meta http-equiv="content-language" content="en-us"></meta>
          <meta name="_csrfHeader" content="X-XSRF-TOKEN"></meta>
        </Helmet>
        <Navigation />
          <TermsAndConditions />
        <Footer />
      </IntlProvider>
    </>
  )
}