import * as React from 'react';
import styles from './Language_dropdown.module.scss';
import Globe_icon from './globe_icon';
import { 
  useSelector, 
  useDispatch 
} from 'react-redux';
import { store_set_lang_state } from '../../../../reducers/lang_reducer';
import { RootState } from '../../../../store/store';


function Language_dropdown() {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  const dispatch = useDispatch();

  const [dropdown_lang, set_dropdown_lang] = React.useState("English");
  const [open, set_open] = React.useState<Boolean>(false);
  const dropdownRef = React.useRef<HTMLButtonElement>(null);

  const click_open_close_handler = () => {
    set_open(prev => !prev);
    // dropdownRef.current?.focus();
  }

  const english_selection_click_handler = () => {
    set_dropdown_lang("English");
    dispatch(store_set_lang_state("en"));
  }

  const chinese_selection_click_handler = () => {
    set_dropdown_lang("中文");
    dispatch(store_set_lang_state("zh"));
  }

  const input_blur_handler = () => {
    set_open(false); // close the dropdown
  }

  return (
    <>
      <div className={styles.language_dropdown_wrapper} 
      >
        {/* <div >  */}
          <button
            className={styles.language_dropdown}
            onClick={click_open_close_handler} 
            tabIndex={0}
            ref={dropdownRef}
            onBlur={input_blur_handler}
          >
            <div className={styles.inner_dropdown_wrapper}>
              <div className={styles.globe_wrapper}>
                <Globe_icon fill={"white"} height={15} />
              </div>
              <p> {dropdown_lang} </p>
              { open &&
                <div className={styles.dropdown_div}>
                  <div className={styles.dropdown_choice}
                    onClick={english_selection_click_handler}
                  > English </div>
                  <div className={styles.dropdown_choice}
                    onClick={chinese_selection_click_handler}
                  > 中文 </div>
                </div>
              }   
            </div>
          </button>
          
        {/* </div> */}
        
       </div>
      
    </>
  )
}

export default Language_dropdown