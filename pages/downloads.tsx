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
import Downloads from '../components/downloads/Downloads';

function Downloads_Site() {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  return (
    <IntlProvider locale={lang} defaultLocale={lang} messages={(lang=='zh') ? cn : en}>
      <Navigation />
        <Downloads />
      <Footer />
    </IntlProvider>
  )
}

export default Downloads_Site;