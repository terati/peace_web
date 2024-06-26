import * as React from 'react';
import styles from './SheetButton.module.scss';


export default function SheetButton(props: any) {
  const {
    ...children
  } = props;
  return (
    <>
      <button>
        { children }
      </button>
    </>
  )
}