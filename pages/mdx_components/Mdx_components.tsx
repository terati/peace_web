import * as React from 'react';
import Image from 'next/image';
import styles from './MDX_styles.module.scss';
import Link from 'next/link';
import Chain_icon from './Chain_icon';

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

const customH1 = ({ id, ...rest }) => {
  if (id) {
    return (
      <Link href={`#${id}`}>
        <a>
          <h1 {...rest} />  
        </a>
      </Link>
    )
  }
  return <h1 {...rest} />;
}

const customH2 = ({ id, ...rest }) => {
  if (id) {
    return (
        <div className={styles.customH2}>
          <Link href={`#${id}`}>
            <div className={styles.header_wrapper}>
              <a>
                <h1 id={`${id}`} {...rest} />  
              </a>
              <div className={styles.chain}>
                <Chain_icon fill={'white'} height={15} width={15}/>
              </div>
            </div>
          </Link>
        </div>
        
      
    )
  }
  return <h1 {...rest} />;
}

const Mdx_components = {
  img: ResponsiveImage,
  p: (props:any) => <p {...props} className={styles.p} />,
  h1: customH1,
  h2: customH2,
  table: (props:any) => <table {...props} className={styles.table} />
}

export default Mdx_components;