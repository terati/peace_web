import * as React from 'react';
import Head from 'next/head';
import styles from './Main.module.scss';
import cn from './../lang/cn.json';
import en from './../lang/en.json';
import { FormattedMessage } from 'react-intl';
import { IntlProvider } from 'react-intl'; 
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { lang_toggle } from '../reducers/lang_reducer';
import { useRouter } from 'next/router';
import Care_Icon from './icons/Care_Icon';
import Medicine_Icon from './icons/Medicine_Icon';
import Umbrella_Icon from './icons/Umbrella_Icon';
import Faq from './sections/faq/Faq';
import { Process } from './sections/process';
import { Navigation } from './navigation';
import { Slideshow } from './sections/slideshow';
import { Footer } from './sections/footer';
import Location from './sections/location/Location';
import Logo from './icons/Logo';
import { RootState } from './../store/store';

// type state_type = {
//   lang?: string;
// }

function Main() {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  const dispatch = useDispatch();
  const router = useRouter();

  const toggle_lang_click = () => {
    dispatch(lang_toggle());
    console.log(lang);
    // router.push(`${lang}`);
  }

  const icon_width = 50;
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const now = new Date();
  const [day, set_day] = React.useState(now.getDay());
  const [hour, set_hour] = React.useState(now.getHours());
  const [min, set_min] = React.useState(now.getMinutes());

  const [opened, set_opened] = React.useState(true);

  React.useEffect(() => {
    if ((day>0 && day<6 && hour>=9 && (hour<=17 && min<=30) ) ||
        (day==6 && hour>=9 && hour<13) 
      ) {
        set_opened(true);
      } else {
        set_opened(false);
      }

      // set_day(6);
      // set_hour(9);
      // set_min(0);
  }, [day, hour, min])

  return (
    <>
      <IntlProvider locale={lang} defaultLocale={lang} messages={(lang == 'zh') ? cn : en}>
        <Head>
          <title>Peace Pharmacy</title>
          <meta name="Peace Pharmacy" content="Peace Pharmacy" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation />
        <div className={styles.main_top}>
          <div className={styles.main_top_left}>
            <div>
              <Logo fill={"black"} width={"100%"} height={200}/>
            </div>
            {/* <h1>
              <FormattedMessage id = "main.main_top_left_h1" />
            </h1> */}
            <p>
              <FormattedMessage id = "main.main_top_left_p1" />
            </p>
            <p>
              <FormattedMessage id = "main.main_top_left_phone" />
            </p>
            <div>
              { opened &&
                <div className={styles.open_status}>
                  Currently Opened Until {(day==6) ? "1PM" : "5:30PM"}
                </div>
              }
              { !opened &&
                <div className={styles.close_status}>
                  Currently Closed
                </div>
              }
              
            </div>
            <div className={styles.business_hours}>
               <div className={styles.business_hours_days}>
                <div> 
                  <FormattedMessage id = "main.mon_to_fri" />
                </div>
                <div> 
                  <FormattedMessage id = "main.sat" />
                </div>
                <div> 
                  <FormattedMessage id = "main.sun" />
                </div>
               </div>
               <div className={styles.business_hours_times}>
                <div> 
                  <FormattedMessage id = "main.mon_to_fri_times" />
                </div>
                <div> 
                  <FormattedMessage id = "main.sat_times" />
                </div>
                <div> 
                  <FormattedMessage id = "main.sun_times" />
                </div>
               </div>

            </div>
          </div>
          <div className={styles.main_top_right}>
            <Slideshow />
          </div>
        </div>

        <div className={styles.main_services}>
          <div className={styles.main_services_left}>
            <h1> <FormattedMessage id = "main.services.h1" /> </h1>
          </div>
          <div className={styles.main_services_right}>
            <div className={styles.main_services_right_items}>
              <div className={styles.main_services_right_items_left_icon}> 
                <Care_Icon height={icon_width} width={icon_width} fill={"white"}/>
              </div>
              <div className={styles.main_services_right_items_right_content}>
                <h2>
                  <FormattedMessage id = "main.services.item1.h2" />
                </h2>
                <p>
                  <FormattedMessage id = "main.services.item1.p" />
                </p>
              </div>
            </div>

            <div className={styles.main_services_right_items}>
              <div className={styles.main_services_right_items_left_icon}> 
                <Medicine_Icon height={icon_width} width={icon_width} fill={"white"}/>
              </div>
              <div className={styles.main_services_right_items_right_content}>
                <h2>
                  <FormattedMessage id = "main.services.item2.h2" />
                </h2>
                <p>
                  <FormattedMessage id = "main.services.item2.p" />
                </p>
              </div>
            </div>

            <div className={styles.main_services_right_items}>
              <div className={styles.main_services_right_items_left_icon}> 
                <Umbrella_Icon height={icon_width} width={icon_width} fill={"white"}/>
              </div>
              <div className={styles.main_services_right_items_right_content}>
                <h2>
                  <FormattedMessage id = "main.services.item3.h2" />
                </h2>
                <p>
                  <FormattedMessage id = "main.services.item3.p" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <Process />
        <Location />
        <Faq />

        <button >
          <Link href={lang=="zh" ? "/en":"/zh"} locale={lang=="zh" ? "en":"zh"} >
            <a onClick={toggle_lang_click}> Toggle </a>
          </Link>
        </button>
        <Footer />
      </IntlProvider>
    </>
  )
}

export default Main;

