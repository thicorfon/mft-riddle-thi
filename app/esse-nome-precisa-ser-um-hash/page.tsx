'use client'
import Image from "next/image";
import { ChangeEventHandler, useState } from "react"

export default function Page() {

  return (
    <div className="flex flex-col items-center justify-center p-8 border rounded-3xl">
      <h1 className="text-4xl mb-4 font-bold">Vishe!</h1>
      <Image
        className="mb-4"
        src="/hamburguergun.jpg"
        alt="Hamburguer com uma arma"
        width={520}
        height={520}
      />
    </div>
  );
}
