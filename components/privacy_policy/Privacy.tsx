import * as React from 'react'
import type { NextPage } from 'next'
import { IntlProvider } from 'react-intl'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Link from 'next/link';
import styles from './Privacy.module.scss';

const Privacy:NextPage = () => {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  const title_with_lang:string = (lang == 'zh') ? '安康藥房' : 'Peace Pharmacy';
  return (
    <>
      <div className={styles.privacy_wrapper}>
        <div className={styles.privacy_wrapper_inner}>
          <h1> Privacy Policy | 隐私政策 </h1>
          <div className={styles.privacy_statement_wrapper}>
            <p>
              This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how it is used.
              We collect information about your interaction with this website including IP address, browser type, identification of associated with your devices, your mobile carrier, crash reports, date and time of access, and the referrer URL of your request to better understand visitors and how we can serve our customers better. 
            </p>
            <p>
              We ask for and may collect Personal Information about the Subscriber such as name, address, phone number, and email address, as well as certain related information like the Subscriber’s company name and website name (“Subscriber Information”), when a Subscriber registers for an account to access or utilize one or more of our Services (an “Account”). We base the processing of the Subscriber Information on our legitimate interest to provide the Subscriber with the necessary functionality required during your use of our Service(s); 
            </p>
            <p> 
              By voluntarily providing us with Subscriber Information, the Subscriber represents that it is the owner of such information or otherwise has the requisite consent to provide it to us.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Privacy

