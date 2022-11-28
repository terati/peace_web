import * as React from 'react';
import styles from './Navigation.module.scss';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Hamburger_icon from './Hamburger_icon';
import { RootState } from '../../../store/store';
import { Language_dropdown } from './language_dropdown';

function Navigation() {
  const lang = useSelector((state: RootState) => state.lang);
  const [sidebar_open, set_sidebar_open] = React.useState(true);

  const close_sidebar = () => {
    set_sidebar_open(!sidebar_open);
  }

  return (
    <div className={styles.navbar_wrapper}>
      <ul className={styles.navbar_ul}>
      <div className={styles.right_mobile_nav}>
        {/* mobile corner right remains empty for now*/}
      </div>
        <div>
          <li className={styles.title}><Link href={`#`}><div> 
            <FormattedMessage id = "navbar.title" />
            </div></Link>
          </li>
          <li className={styles.item}><Link href={`/#section_main_services`}><div>
            <FormattedMessage id = "navbar.services" />
            </div></Link>
          </li>
          <li className={styles.item}><Link href={`/#section_main_process`}><div>
            <FormattedMessage id = "navbar.process" />
            </div></Link>
          </li>
          <li className={styles.item}><Link href={`/#section_main_faq`}><div> 
            <FormattedMessage id = "navbar.faq" />
            </div></Link>
          </li>
        </div>
        {/* language selection */}
        <div className={styles.navigation_bar_right}>
          <li className={`${styles.item} ${styles.language_dropdown_positioning}`}> 
            {/* <div>  */}
              <Language_dropdown />
              {/* <FormattedMessage id = "navbar.faq" /> */}
            {/* </div> */}
          </li>
          
          <li className={styles.hamburger_icon}
            onClick={() => set_sidebar_open(!sidebar_open)}
          >
            <Hamburger_icon fill={'white'} height={20} width={20} />
          </li>
        </div>
        
      </ul>

      <div className={`${styles.sidebar_right} ${sidebar_open ? styles.sidebar_opened : styles.sidebar_closed}`}>
        <Link href={`/#section_main_services`} >
          <div className={styles.navigation_item} onClick={close_sidebar}> 
            <FormattedMessage id = "navbar.services" />
          </div>
        </Link>
        <Link href={`/#section_main_process`} >
          <div className={styles.navigation_item} onClick={close_sidebar}> 
            <FormattedMessage id = "navbar.process" />
          </div>
        </Link>
        <Link href={`/#section_main_faq`}>
          <div className={styles.navigation_item} onClick={close_sidebar}> 
            <FormattedMessage id = "navbar.faq" />
          </div>
        </Link>
        <div className={styles.navigation_item} onClick={close_sidebar}> 
          <FormattedMessage id = "navbar.lang" />
        </div>
      </div>
    </div>
  )
}

export default Navigation