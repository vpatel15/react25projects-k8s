import React, { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QRCodeGenerator() {
const [qrCode, setQrCode] = useState('');
const [qrCodeGen, setQrCodeGen] = useState('');

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input type="text" name="" placeholder='Enter your value' onChange={(e) => setQrCode(e.target.value)}/>
        <button disabled={qrCode && qrCode.trim() !== '' ? false : true } onClick={() => setQrCodeGen(qrCode)}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCodeGen} />
      </div>
    </div>
  )
}