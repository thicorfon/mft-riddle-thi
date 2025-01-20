'use client'
import Image from "next/image";

export default function Page() {

  return (
    <div className="flex flex-col items-center justify-center p-8 border rounded-3xl">
      <h1 className="text-4xl mb-4 font-bold">Parabéns!</h1>
      <Image
        className="mb-4"
        src="/151.png"
        alt="Convite"
        width={970}
        height={1600}
      />
    </div>
  );
}
