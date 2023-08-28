import * as React from 'react';
import { Blogpost_footer } from '../blogpost_footer';
import { Blogpost_navbar } from '../blogpost_navbar';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import cn from '../../lang/cn.json';
import en from '../../lang/en.json';

import Link from 'next/link';
import styles from './BlogPost.module.scss';
import Image from 'next/image';

type Content_Type = {
  title: string; 
  src: string;
}

interface Meta_Interface {
  title: string;
  description: string;
  date: string;
  readTime: number;
  author: string;
  src: string;
  alt: string;
  contents: Array<Content_Type>
  lang: string;
}

interface BlogPost_Props_Interface {
  children: any;
  meta: Meta_Interface;
}

function BlogPost(props:BlogPost_Props_Interface) {
  const {
    children,
    meta
  } = props;
  const [cnt, setCnt] = React.useState(0);
  const [current_section, set_current_section] = React.useState("");
  const lang = useSelector((state:RootState) => state.lang ?? "");

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          // console.log(entry.target.id);
          set_current_section(entry.target.id);
          // console.log(entry);
          // setCnt(prev => prev+1);
          // try {
            // observer.unobserve(entry.target);
          // } catch {
            // console.log();
          // }
        }
      })
    }, {threshold: 1});
    document.querySelectorAll("h1").forEach(h1 => { observer.observe(h1) });
    return () => document.querySelectorAll("h1").forEach(h1 => { observer.unobserve(h1) });
  }, []);
  
  React.useEffect(() => {
    // if (meta.lang=="en") set_title("Peace Pharmacy");
    // if (meta.lang=="zh") set_title("安康藥房");
    const prevTitle = document.title;
    if (meta.lang=="en") document.title = "Peace Pharmacy";
    if (meta.lang=="zh") document.title = "安康藥房";
  }, [meta.lang]);

  return (
    <>
      <IntlProvider locale={lang} defaultLocale={lang} messages={(lang == 'zh') ? cn : en}>
        <Blogpost_navbar />
        <div className={styles.div_wrapper}>

          <div className={styles.container}>
            <div className={styles.inner_container}>
              <h1 className={styles.post_title}> { meta.title } </h1>
              <p className={styles.post_description}> { meta.description } </p>
              <p> {(meta.lang=="en") ? "Author: " : "作者："} { meta.author } </p>
              <p> {(meta.lang=="en") ? "Read Time: " : "阅读时间："} {`${meta.readTime}`} {(meta.lang=="en") ? "min" : "分钟。"} </p>
              <div className={styles.main_image_wrapper}>
                <Image 
                  src={meta.src}
                  alt={meta.alt}
                  width={100}
                  height={60}
                  layout={"fill"}
                  objectFit='cover'
                  className={styles.main_image}
                />
              </div>
              
              
              <article className={styles.article}>
                <div>
                  {children}

                </div>
              </article>
            </div>
            <div className={styles.content_sidebar}>
              
              <div className={styles.div_inner_content_sidebar}> 
                <h2> {meta.lang=="en" ? "Contents" : "内容"} </h2>
                { meta.contents?.map((item) => {
                    return (
                      <>
                        <div className={`${styles.div_inner_content_sidebar_navigation_items} 
                                        ${(item.src==current_section) ? styles.div_inner_content_sidebar_navigation_items_current_section : ""}`}>
                          <Link href={`#${item.src}`}>
                            {item.title}
                          </Link>
                        </div>
                      </>
                    )
                }) }
              </div>
              
            </div>
            
          </div>
        </div>
        <Blogpost_footer />
      </IntlProvider>
    </>
  )
}

export default BlogPost