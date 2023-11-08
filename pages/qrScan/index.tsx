import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

// import React from 'react'

export default function Scan() {
  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader
        // constraints={}
        style={{ width: "200px", heigth: "100px" }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      <p>{data}</p>
    </>
  );
}

// const Test = () => {
//   const [data, setData] = useState("No result");

//   return (
//     <>
//       <QrReader
//         onResult={(result, error) => {
//           if (!!result) {
//             setData(result?.text);
//           }

//           if (!!error) {
//             console.info(error);
//           }
//         }}
//         style={{ width: "100%" }}
//       />
//       <p>{data}</p>
//     </>
//   );
// };
