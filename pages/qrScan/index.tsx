import React, { useState } from "react";
// import {Fab, TextareaAutosize} from '@material-ui/core'
// import {ArrowBack} from '@material-ui/icons'
// import { Link } from "react-router-dom";
import { QrReader } from "react-qr-reader";

export default function QRscanner(): JSX.Element {
  const [qrscan, setQrscan] = useState("No result");
  const handleScan = (data: any) => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <div>
      <span>QR Scanner</span>
      <div style={{ marginTop: 30 }}>
        <QrReader
          //  facingMode='environment'
          onResult={handleScan}
          containerStyle={{ height: 240, width: 320 }}
          constraints={{ facingMode: "environment" }} // constraints={}
          // delay={300}
          // onError={handleError}
          // onScan={handleScan}
          // style={{ height: 240, width: 320 }}
        />
      </div>
      <div>{qrscan}</div>
    </div>
  );
}

// export default QRscanner;
