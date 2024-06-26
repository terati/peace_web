import * as React from 'react';
import styles from './LabelSection.module.scss';
import { Button } from '../sheet/Layover/Button';

const LabelSection = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    
    const ctx = canvas?.getContext('2d'); 
    if (!canvas || !ctx) return; 
    const widthInInches = 8.5;
    const heightInInches = 12;
    const dpi = 300;
    const width = widthInInches * dpi;
    const height = heightInInches * dpi;
    canvas.width = width;
    canvas.height = height;
    ctx.scale(dpi, dpi);

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, widthInInches, heightInInches);
    ctx.fillStyle = 'purple';
    ctx.font = '.5px Arial';
    ctx.fillText('Hello World', 0, 1); // Positions are in inches

    
  }, [])

  const handlerPrint = () => {
    const canvas = canvasRef.current; 
    const dataUrl = canvas?.toDataURL('image/png');

    const img = new Image();
    img.src = String(dataUrl);

    const windowContent = `
      <!DOCTYPE html>
      <html>
      <head><title>Print canvas</title>
      <style>
      @page {
        size: A4;
        margin: 0;
      }
      body {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
      }
      img {
        width: 100%;
        height: auto;
        max-width: 210mm; /* A4 width */
        max-height: 297mm; /* A4 height */
      }
    </style>
      </head>
      <body>
        <img src="${dataUrl}" onload="setTimeout(() => { window.print(); window.close(); }, 500);" />
      </body>
      </html>`;
    const printWindow = window.open('', '_blank');
    // , 'width=800,height=600'
    if (!printWindow) return; 
    printWindow.document.open();
    printWindow.document.write(windowContent);
    printWindow.document.close();
  }

  return (
    <div className={styles.wrapper}>
      <h1> Label </h1>
      <Button onClick={handlerPrint}> Test </Button>
      <canvas ref={canvasRef}
        style={{ width: '500px', height: 'auto', border: '1px solid white' }}
      ></canvas>
    </div>
  )
}

export default LabelSection;