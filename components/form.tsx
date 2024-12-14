'use client'
import Image from "next/image";
import { ChangeEventHandler, useState } from "react"

interface FormProps {
  title: string;
  image: { src: string, alt: string, width: number, height: number };
  question: string;
  inputMaxLength: number;
  hint: string;
  onSubmitAction: (answer: string) => Promise<{ valid: boolean }>;
}

export default function Form({ onSubmitAction, image, hint, title, question, inputMaxLength }: FormProps) {
  const [inputValue, setInputValue] = useState("")

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value)
  }

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submit()
    }
  }

  const submit = () => {
    onSubmitAction(inputValue).then((response) => {
      if (!response.valid) {
        alert("Resposta errada")
      }
    });
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 border rounded-3xl bg-card">
      <h1 className="text-4xl mb-4 font-bold">{title}</h1>
      <Image
        className="mb-4"
        {...image}
      />
      <label htmlFor="question" className="text-xl mb-4">{question}</label>
      <div className="flex items-center gap-5">
        <input
          id="question"
          type="text"
          className="border p-2 rounded-md"
          placeholder="Resposta"
          autoFocus
          maxLength={inputMaxLength}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleEnterPress}
        />
        <button className="bg-primary text-primary-foreground p-2 rounded-md" type="button" onClick={submit}>Enviar</button>
      </div>
      <div className="mt-2 text-sm text-primary">
        Caracteres restantes: {inputMaxLength - inputValue.length}
      </div>
      <div className="mt-2 text-sm">
        Dica: {hint}
      </div>
    </div>
  );
}
