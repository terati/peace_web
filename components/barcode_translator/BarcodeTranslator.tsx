import * as React from 'react';
import parseDataMatrix from './parseDatamatrix';
import styles from './BarcodeTranslator.module.scss'; 

const BarcodeTranslator = () => {
  const [val, setVal] = React.useState(
    "01003704361830292110000282035 17250731102309133"
  );

  const [ex, setEx] = React.useState<string | undefined>("");
  const [lot, setLot] = React.useState<string | undefined>("");
  const [ndc, setNdc] = React.useState<string | undefined>("");
  const [gtin, setGtin] = React.useState<string | undefined>("");
  const [serial, setSerial] = React.useState<string | undefined>("");
  const [mmyy, setMmyy] = React.useState<string | undefined>("");


  const [upc, setUpc] = React.useState("");
  const [ndcFromUpc, setNdcFromUpc] = React.useState("");

  const barcodeRef = React.useRef<HTMLInputElement>(null);
  const upcRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const { expirationDate, lotNum, ndcNum, gtinNum, serialNum } = parseDataMatrix(val);
    setGtin(gtinNum);
    setSerial(serialNum);
    setEx(expirationDate);
    setLot(lotNum);
    setNdc(ndcNum);
    if (!expirationDate || expirationDate.length < 4) return;
    setMmyy(expirationDate.substring(2, 4) + expirationDate.substring(0, 2));
  }, []);

  const onChangeHandler = (e:any) => {
    setVal(e.target.value);
    const { expirationDate, lotNum, ndcNum, gtinNum, serialNum } =
      parseDataMatrix(e.target.value);

    // console.log("Here: " + parseDataMatrix(e.target.val));
    setGtin(gtinNum);
    setSerial(serialNum);
    setEx(expirationDate);
    setLot(lotNum);
    setNdc(ndcNum);
    if (!expirationDate || expirationDate.length < 4) return;
    setMmyy(expirationDate.substring(2, 4) + expirationDate.substring(0, 2));
  };

  const copyToClipboard = (val: any) => {
    try {
      navigator.clipboard.writeText(val);
    } catch {}
  };

  const onInputClickHandler = () => {
    if (barcodeRef) barcodeRef.current?.select();
  }

  const onUpcClickHandler = () => {
    if (upcRef) upcRef.current?.select();
  }

  const onUpcChangeHandler = (e: any) => {
    let tmp = e.target.value;
    setUpc(tmp);
    setNdcFromUpc(tmp.substring(1, tmp.length-1));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.centered}>
        <h1> Barcode Converter </h1>
        <p> Scan Data Matrix </p>
        <input className={styles.scannedInput} value={val} 
          onChange={onChangeHandler} 
          onClick={onInputClickHandler}
          ref={barcodeRef}
          placeholder='data matrix'
        />
        <button className={styles.copyButton} onClick={() => copyToClipboard(ndc)}> 
          <h1> NDC: {ndc} </h1>
        </button>
        <button className={styles.copyButton} onClick={() => copyToClipboard(lot)}> 
          <h1> lot: {lot} </h1>
        </button>
        <button className={styles.copyButton} onClick={() => copyToClipboard(mmyy)}> 
          <h1> mmyy: {mmyy} </h1>
        </button>
        <input className={styles.scannedInput} value={upc} 
          onChange={onUpcChangeHandler} 
          onClick={onUpcClickHandler}
          ref={upcRef}
          placeholder='upc'
        />
        <button className={styles.copyButton} onClick={() => copyToClipboard(ndcFromUpc)}> 
          <h1> ndc: {ndcFromUpc} </h1>
        </button>
      </div>
      
    </div>
  )
}

export default BarcodeTranslator;

