import * as React from 'react';
import Image from 'next/image';
import styles from './MDX_styles.module.scss';

const ResponsiveImage = (props: any) => {
  const im_styles = {
    borderRadius: "20px",
  }
  return (
    <Image 
      src={props.src}
      alt={props.alt}
      width={100}
      height={60}
      layout={"responsive"}
      style={im_styles}
      // sizes="(max-width: 800px) 100vw,
      //         (max-width: 10000px) 50vw"
      {...props}
    />
  )
}

const Mdx_components = {
  img: ResponsiveImage,
  p: (props:any) => <p {...props} className={styles.p} />,
  h1: (props:any) => <h1 {...props} className={styles.h1} />,
  h2: (props:any) => <h1 {...props} className={styles.h2} />,
  table: (props:any) => <table {...props} className={styles.table} />
}

export default Mdx_components;