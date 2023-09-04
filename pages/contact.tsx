import * as React from 'react';
import { Navigation } from '../components/Main/navigation';
import { Footer } from '../components/Main/sections/footer';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { AboutModule } from '../components/aboutmodule';
import { ContactModule } from '../components/contact_module';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import cn from '../lang/cn.json';
import en from '../lang/en.json';

function Contact() {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  return (
    <IntlProvider locale={lang} defaultLocale={lang} messages={(lang=='zh') ? cn : en}>
      <Navigation />
        <ContactModule />
      <Footer />
    </IntlProvider>
  )
}

export default Contact; 