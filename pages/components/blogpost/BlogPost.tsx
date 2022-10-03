import * as React from 'react';

function BlogPost(props:any) {
  const {
    children,
    meta
  } = props;
  return (
    <>
      <article>
        {children}
      </article>
    </>
  )
}

export default BlogPost