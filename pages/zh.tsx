import * as React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { lang_toggle } from '../reducers/lang_reducer';
import { setLang } from '../reducers/lang_reducer';
import Link from 'next/link';
function zh() {
  const router = useRouter();
  const dispatch = useDispatch();
  React.useEffect(() => {
    const changeLanguage = async () => {
      try {
        await dispatch(setLang("chinese"));
        // console.log("success");
        router.push('/');
      } catch { 
        console.log("Error toggling language");
      }
    }
    changeLanguage();
    
  }, []);
  return (
    <> </>
  )
}

export default zh;

