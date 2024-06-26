import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from './IconWrapper.module.scss';
import useHover from './useHover';

export default function IconWrapper(props: any) {
  const {
    page,
    ...rest
  } = props;
  const [hoverRef, hovering] = useHover(); 
  const pageSelected = useSelector((state: RootState) => state.timesheet);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.iconWrapper} ${(pageSelected.page==page ? styles.selected : '')}` } ref={hoverRef}
      {...rest}
    >
      { hovering && <div className={styles.tooltip}> {page} </div> }
      { props.children } 
    </div>
  )
}