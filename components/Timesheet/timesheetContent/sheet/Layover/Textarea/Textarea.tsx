import * as React from 'react';
import styles from './Textarea.module.scss';

type TextType = { 
  value: string | undefined;
  onChange: (val:string) => void; 
}

export default function Textarea(props: TextType) {
  const {
    value = 'wtf',
    onChange
  } = props; 

  const textOnChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <span className={styles.textareaWrapper}>
      <textarea
        rows={4}
        onChange={textOnChangeHandler}
        placeholder={"Optional Notes"}
        value={value}
      >
      </textarea>
    </span>
  )
}