import * as React from 'react';
import styles from './Showroom.module.scss';
import stylesGrid from './ShowroomGrid.module.scss';
import stylesShowroomFlex from './ShowroomFlex.module.scss';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import Link from 'next/dist/client/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import MiniArticle from './MiniArticle';

function Showroom() {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  return (
    <>
      <h2 className={styles.showroom_h2}>
        <FormattedMessage id={"main.articles.h2"} />
      </h2>
      <div className={styles.major_showroom_wrapper}>
        <div className={stylesGrid.showroom_grid}> 
          <div className={stylesGrid.showcase_article}> 
            <div className={stylesGrid.showcase_image_wrapper}> 
              <Image 
                src={'/blog_images/bp.jpg'} 
                layout={'fill'}
                objectFit={'cover'}
                blurDataURL={"/blog_images/bp.jpg"}
                alt="High Blood Pressure--Understanding the Silent Killer"
              />
              <div className={stylesGrid.overlay}>
                <Link href={(lang == 'zh') ? "/blog/zh/high_blood_pressure" : "/blog/en/high_blood_pressure"}>
                  <h2>  <FormattedMessage id ={"main.article2.h2"} /> </h2>
                </Link>
                
              </div>
            </div>
          </div>
          <div className={`${stylesGrid.article2} ${stylesGrid.article_display}`}> 
            <MiniArticle imageSrc={'/blog_images/pills.jpg'} articleId={"main.article1.h2"} linkSrc={"generic_drugs_questions_and_answers"}></MiniArticle>
          </div>
          <div className={`${stylesGrid.article3} ${stylesGrid.article_display}`}> 
            <MiniArticle imageSrc={'/blog_images/sanitizer.jpg'} articleId={"main.article3.h2"} linkSrc={"is_your_hand_sanitizer_on_fda_list_of_products_you_should_not_use"}></MiniArticle>
          </div>
          <div className={`${stylesGrid.article4} ${stylesGrid.article_display}`}> 
            <MiniArticle imageSrc={'/blog_images/pharmacist.jpg'} articleId={"main.article4.h2"} linkSrc={"getting_a_prescription_filled"}></MiniArticle>
          </div>
          <div className={`${stylesGrid.article5} ${stylesGrid.article_display}`}> 
            <MiniArticle imageSrc={'/blog_images/prescription-label-zoomed-out.jpg'} articleId={"main.article5.h2"} linkSrc={"understanding_a_prescription_label"}></MiniArticle>
          </div>
        </div>

        <div className={stylesShowroomFlex.flex_mobile_view}> 
          <div className={stylesShowroomFlex.articleFlex}>  
            <MiniArticle imageSrc={'/blog_images/pills.jpg'} articleId={"main.article1.h2"} linkSrc={"generic_drugs_questions_and_answers"}></MiniArticle>
          </div>

          <div className={stylesShowroomFlex.articleFlex}> 
            <MiniArticle imageSrc={'/blog_images/sanitizer.jpg'} articleId={"main.article3.h2"} linkSrc={"is_your_hand_sanitizer_on_fda_list_of_products_you_should_not_use"}></MiniArticle>
          </div>
          <div className={stylesShowroomFlex.articleFlex}> 
            <MiniArticle imageSrc={'/blog_images/pharmacist.jpg'} articleId={"main.article4.h2"} linkSrc={"getting_a_prescription_filled"}></MiniArticle>
          </div>
          <div className={stylesShowroomFlex.articleFlex}> 
            <MiniArticle imageSrc={'/blog_images/prescription-label-zoomed-out.jpg'} articleId={"main.article5.h2"} linkSrc={"understanding_a_prescription_label"}></MiniArticle>
          </div>
        </div>

        {/* <div className={styles.showroom_wrapper}>
          <Link href={(lang == 'zh') ? "/blog/zh/high_blood_pressure" : "/blog/en/high_blood_pressure"}>
            <div className={`${styles.showroom_inner_left} ${styles.showroom_inner_left_hidden}`}>
              <div className={styles.main_image_wrapper}>
                <Image 
                  src={'/blog_images/bp.jpg'} 
                  layout={'fill'}
                  objectFit={'cover'}  
                />
              </div>
              <div>
                <h2> 
                  <FormattedMessage id = "main.article2.h2" />
                </h2>
                <p>  
                  <FormattedMessage id = "main.article2.p1" />
                </p>
              </div>
              
            </div>
          </Link>
          <div className={styles.showroom_inner_right}>
            <Link href={(lang == 'zh') ? "/blog/zh/high_blood_pressure" : "/blog/en/high_blood_pressure"}>
              <div className={`${styles.showroom_right_item} ${styles.showroom_right_item_duplicate}`}>
                <div className={styles.showroom_right_item_image}> 
                  <Image 
                    src={'/blog_images/bp.jpg'} 
                    layout={'fill'}
                    objectFit={'cover'}  
                  />
                </div>
                <div className={styles.showroom_right_item_content}>
                  <h2> 
                    <FormattedMessage id = "main.article2.h2" />
                  </h2>
                  <p>  
                    <FormattedMessage id = "main.article2.p1" />
                  </p>
                </div>
              </div>
            </Link>
            <Link href={(lang == 'zh') ? "/blog/zh/generic_drugs_questions_and_answers" : "/blog/en/generic_drugs_questions_and_answers"}>
              <div className={styles.showroom_right_item}>
                <div className={styles.showroom_right_item_image}> 
                  <Image 
                    src={'/blog_images/pills.jpg'} 
                    layout={'fill'}
                    objectFit={'cover'}  
                  />
                </div>
                <div className={styles.showroom_right_item_content}>
                  <h2> 
                    <FormattedMessage id = "main.article1.h2" />
                  </h2>
                  <p>  
                    <FormattedMessage id = "main.article1.p1" />
                  </p>
                </div>
              </div>
            </Link>
            <Link href={(lang == 'zh') ? "/blog/zh/is_your_hand_sanitizer_on_fda_list_of_products_you_should_not_use" : "/blog/en/is_your_hand_sanitizer_on_fda_list_of_products_you_should_not_use"}>
              <div className={styles.showroom_right_item}>
                <div className={styles.showroom_right_item_image}> 
                  <Image 
                    src={'/blog_images/sanitizer.jpg'} 
                    layout={'fill'}
                    objectFit={'cover'}  
                  />
                </div>
                <div className={styles.showroom_right_item_content}>
                  <h2> 
                    <FormattedMessage id = "main.article3.h2" />
                  </h2>
                  <p>  
                    <FormattedMessage id = "main.article3.p1" />
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Showroom