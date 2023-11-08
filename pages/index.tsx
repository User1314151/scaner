import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>aqui é a Home mudado</h1>
      <div>
        <Link href="./qrScan">Scanner</Link>
      </div>
    </div>
  );
}
