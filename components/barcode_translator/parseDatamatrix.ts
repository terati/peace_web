function parseDataMatrix(decodedString: string) {
  if (decodedString == null || decodedString == undefined) decodedString = "";
  let expirationDate, lotNum, ndcNum, gtinNum, serialNum;
  let i = 0;
  let n = decodedString.length;
  console.log(decodedString);

  while (i < n) {
    let prefix = decodedString.substring(i, i + 2);
    i += 2;
    if (prefix == "01") {
      // gtin
      gtinNum = decodedString.substring(i, i + 14);
      ndcNum = gtinNum.substring(3, 13);
      console.log("gtin: " + gtinNum);
      i += 14;
    } else if (prefix == "17") {
      // expiration date
      expirationDate = decodedString.substring(i, i + 6);
      console.log("expiration: " + expirationDate);
      i += 6;
    } else if (prefix == "10") {
      // the lot number
      let startIdx = i;
      while (i < n && decodedString.charAt(i) != " ") {
        i++;
      }
      lotNum = decodedString.substring(startIdx, i);
      console.log("lot: " + lotNum);
      if (i < n && decodedString.charAt(i) == " ") i++;
    } else if (prefix == "21") {
      // the serial number
      let startIdx = i;
      while (i < n && decodedString.charAt(i) != " ") {
        i++;
      }
      serialNum = decodedString.substring(startIdx, i);
      console.log("serial: " + serialNum);
      if (i < n && decodedString.charAt(i) == " ") i++;
    }
  }

  // const expirationDateMatch = decodedString.match(/\(17\)(\d{6})/);
  // const lotNumberMatch = decodedString.match(/\(10\)([^\(]+)/);
  // const ndcMatch = decodedString.match(/\(01\)(\d{14})/);

  return {
    expirationDate,
    lotNum,
    ndcNum,
    gtinNum,
    serialNum,
  };
}

export default parseDataMatrix;
