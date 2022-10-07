import * as React from 'react';
import Image from 'next/image';

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
)

const Mdx_components = {
  img: ResponsiveImage
}