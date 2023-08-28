import * as React from 'react';
import styles from './Slideshow.module.scss';
import elder from '../../../../public/slideshow_ims/elder.png';
import Image from 'next/image';

function Slideshow() {
  const ims = [`/slideshow_ims/elder.png`, `/slideshow_ims/chinatown_gate.jpg`, `/slideshow_ims/chicago_xl.png`, `/slideshow_ims/chinatown.jpg` ];

  const [prev_im_idx, set_prev_im_idx] = React.useState(ims.length-1);
  const [cur_im_idx, set_cur_im_idx] = React.useState(0);
  
  const [im1, set_im1] = React.useState(prev_im_idx);
  const [im2, set_im2] = React.useState(cur_im_idx);

  const [slide_dir, set_slide_dir] = React.useState(true); 
  const [classNames, set_classNames] = React.useState("animation_forward");
  
  React.useEffect(() => {
    const id = setInterval(() => {
      set_prev_im_idx(cur_im_idx);
      set_cur_im_idx((prev) => (prev+1)%ims.length)
      if (slide_dir == true) {
        set_im1(cur_im_idx);
        set_classNames("animation_forward");
      } else {
        set_im2(cur_im_idx);
        set_classNames("animation_reverse");
      }
      set_slide_dir(prev => !prev);
    }, 10_000);
    return () => clearInterval(id);

  }, [cur_im_idx, slide_dir]);

  const onAnimationStart = () => {
    // set_classNames("animation");
  }

  const onAnimationEnd = () => {
    // set_classNames("");
  }

  return (
    <>
      <div className={styles.slideshow_wrapper}>
        <div className={`${styles.slideshow_inner_div} ${classNames ? styles[classNames] : ''}`}
          onAnimationStart={onAnimationStart}
          onAnimationEnd={onAnimationEnd}
        >
          <div className={styles.slideshow_inner_images}>
            <img src={ims[im1]} alt="Logo" height={500}/>
          </div>
          <div className={styles.slideshow_inner_images}>
            <img src={ims[im2]} alt="Logo" height={500}/>
          </div>
          
        </div>
      </div>
      <div className={styles.mobile_static_image}>
        <div className={styles.module_static_image_inner_wrapper}>
          {/* <p> Ello World </p> */}
          <Image 
            src={ims[0]} 
            alt="pharmacy_photo_reel"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={ims[0]}
          />
        </div>
       
      </div>
    </>
    
  )
}

export default Slideshow