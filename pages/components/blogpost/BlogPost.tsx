import * as React from 'react';
import { Blogpost_footer } from '../blogpost_footer';
import { Blogpost_navbar } from '../blogpost_navbar';
import Link from 'next/link';
import styles from './BlogPost.module.scss';
import Image from 'next/image';

interface Meta_Interface {
  title: string;
  description: string;
  date: string;
  readTime: number;
  author: string;
  src: string;
  alt: string;
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
  console.log(children);
  return (
    <>
      <title> Peace Pharmacy </title>
      <Blogpost_navbar />
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <h1 className={styles.post_title}> { meta.title } </h1>
          <p> { meta.description } </p>
          <p> { meta.author } </p>
          <p> { ` ${meta.readTime}` } </p>
          <div className={styles.main_image_wrapper}>
            <Image 
              src={meta.src}
              alt={meta.alt}
              width={100}
              height={60}
              layout={"responsive"}
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
          <h2> Contents </h2>
          <div className={styles.div_inner_content_sidebar}> 
            { meta.contents?.map((item) => {
                return (
                  <>
                    <div className={styles.div_inner_content_sidebar_navigation_items}>
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
      <Blogpost_footer />
      
    </>
  )
}

export default BlogPost