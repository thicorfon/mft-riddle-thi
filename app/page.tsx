'use client'
import Image from "next/image";
import { ChangeEventHandler, useState } from "react"
import { answerLevelOne } from "./actions";

export default function Home() {
  const [inputValue, setInputValue] = useState("")

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value)
  }

  const submit = () => {
    answerLevelOne(inputValue).then((response) => {
      if (!response.valid) {
        alert("Resposta errada")
        return
      }
    });
    // fetch(`/api/level-one`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     answer: inputValue,
    //   }),
    // })
    // .then((response) => response.json())
    // .then((json) => {
    //   console.log(json)
    // })
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 border rounded-3xl bg-card">
      <h1 className="text-4xl mb-4 font-bold">Nível 1: Mãos para cima!</h1>
      <Image
        className="mb-4"
        src="/hamburguergun.jpg"
        alt="Hamburguer com uma arma"
        width={520}
        height={520}
      />
      {/* <form action={navigate}>
        <input type="text" name="id" />
        <button>Submit</button>
      </form> */}
      <label htmlFor="question" className="text-xl mb-4">De onde é essa imagem?</label>
      <div className="flex items-center gap-5">
        <input
          id="question"
          type="text"
          className="border p-2 rounded-md"
          placeholder="Resposta"
          maxLength={5}
          value={inputValue}
          onChange={handleChange} />
        <button className="bg-primary text-primary-foreground p-2 rounded-md" type="button" onClick={submit}>Enviar</button>
      </div>
      <div className="mt-4 text-primary">
        Caracteres restantes: {5 - inputValue.length}
      </div>
      <div className="mt-4">
        Formato da resposta: nome da plataforma
      </div>
    </div>
  );
}
