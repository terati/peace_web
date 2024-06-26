import * as React from 'react'; 
import styles from './DatePicker.module.scss';
import { Event } from '@mui/icons-material';
import Calender from './Calender';

const isNumber = (char: any) => {
  return !isNaN(parseInt(char));
}

interface DatePickerInterface {
  initialDate?: string; // YYYYMMDD
  onChange?: (date: string) => void; 
}

const getCurrentDateYYYYMMDD = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}${month}${day}`;
}

export default function DatePicker(props: DatePickerInterface) {
  const {
    initialDate = getCurrentDateYYYYMMDD(),
    onChange,  
  } = props;
  // const [date, setDate] = React.useState("mm/dd/yyyy");
  const [date, setDate] = React.useState({ m:'mm', d:'dd', y:'yyyy'})
  const dateRef = React.useRef<HTMLInputElement>(null);
  const [selectionZone, setSelectionZone] = React.useState<'y' | 'm' | 'd'>('m'); 
  const [calenderVisible, setCalenderVisible] = React.useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (dateRef.current) {
      let clickIdx = (e.target as HTMLInputElement).selectionStart;
      if (clickIdx==null) return;
      focusSelectionZone('', clickIdx);
    }
    if (onChange) onChange(date.y + date.m + date.d);
  }

  /*
  *  if clickIdx==-1, then focus is based on zone; Other wise focus is based on the clickIdx.
  */
  const focusSelectionZone = (zone: string, clickIdx: number | null) => {
    if (!dateRef.current) return;
    let leftIdx = null, rightIdx = null;
    if (clickIdx!=null && clickIdx<=2 || (zone=='m' && clickIdx==null)) {
      leftIdx = 0; rightIdx = 2;
      setSelectionZone('m');
    } else if (clickIdx!=null && clickIdx<=5 || (zone=='d' && clickIdx==null)) {
      leftIdx = 3; rightIdx = 5;
      setSelectionZone('d');
    } else if (clickIdx!=null && clickIdx>=6 || (zone=='y' && clickIdx==null)) {
      leftIdx = 6; rightIdx = 10;
      setSelectionZone('y');
    }
    dateRef.current.setSelectionRange(leftIdx, rightIdx);
  }

  const onChangeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    let updatedDate = date;
    const order: ('m' | 'd' | 'y')[] = ['m', 'd', 'y'];
    const orderDt = {'m':0, 'd':1, 'y':2};
    if (e.key=='ArrowLeft' || e.key=='ArrowUp') {
      setSelectionZone(order[(orderDt[selectionZone]+2)%3]);
      return; 
    } else if (e.key=='ArrowRight' || e.key=='ArrowDown' || e.key=='Enter') {
      setSelectionZone(order[(orderDt[selectionZone]+4)%3]);
      return; 
    }
    if (selectionZone=='y') {
      let curY = date.y;
      if (isNumber(e.key)) {
        let nY = curY.substring(1, 4) + e.key;
        updatedDate.y = nY;
      } else if (e.key=='Backspace' || e.key=='Escape') {
        let nY = '0000';
        updatedDate.y = nY; 
      }
    } else if (selectionZone=='m') {
      let curM = date.m;
      if (isNumber(e.key)) {
        let nM = curM.substring(1,2) + e.key;
        updatedDate.m = nM; 
      } else if (e.key=='Backspace' || e.key=='Escape') {
        let nM = '00';
        updatedDate.m = nM; 
      }
    } else if (selectionZone=='d') {
      let curD = date.d;
      if (isNumber(e.key)) {
        let nD = curD.substring(1,2) + e.key;
        updatedDate.d = nD;
      } else if (e.key=='Backspace' || e.key=='Escape') {
        let nD = '00';
        updatedDate.d = nD;
      } 
    }
    setDate((prev) => { return ({...prev, ...updatedDate}) });
    if (onChange) onChange(updatedDate.y + updatedDate.m + updatedDate.d);
  }

  const onDateChange = (year: number, month: number, day: number) => {
    let m = String(month+1).padStart(2, '0');
    let d = String(day).padStart(2, '0');
    let y = String(year).padStart(4, '0');
    setDate({ m:m, d:d, y:y })
    if (onChange) onChange(y + m + d); 
  }

  const calenderClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setCalenderVisible((prev) => !prev);
    if (dateRef.current) dateRef.current.focus(); 
    // console.log("hello" + (calenderVisible ? "True" : "False"));
  }

  const dateOnBlurHandler = () => {
    setCalenderVisible(false);
  }

  React.useEffect(() => {
    focusSelectionZone(selectionZone, null);
  }, [date.m, date.d, date.y, selectionZone])

  React.useEffect(() => {
    if (initialDate && initialDate!='') {
      setDate({
        y: initialDate.substring(0,4),
        m: initialDate.substring(4,6),
        d: initialDate.substring(6,8)
      })
    }
  }, [])

  return (
    <span className={styles.datepicker}> 
      <input type="text" placeholder="mm/dd/yyyy" value={date.m+"/"+date.d+"/"+date.y} ref={dateRef} 
        onClick={handleClick}
        onBlur={dateOnBlurHandler}
        autoComplete='none'
        onChange={() =>{}} 
        onKeyDown={onChangeHandler}
        spellCheck="false"
      />
      <div className={styles.calenderIcon} 
        onMouseDown={(e) => e.preventDefault()}
        onClick={calenderClickHandler}> <Event fontSize={"small"} /> </div>
      <Calender calenderVisible={calenderVisible} onDateChange={onDateChange} />
    </span>
  )
}