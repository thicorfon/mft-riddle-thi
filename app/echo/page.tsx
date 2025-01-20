'use client'
import Form from "../../components/form";
import { answerLevelSix } from "../server-actions";

export default function Page() {

  return (
    <Form
      title="Nível 6: Maneiras não convencionais de se abrir um vinho"
      image={{ src: "/saca-rolhas.jpg", alt: "", width: 520, height: 520 }}
      question="Maria Fernanda conheceu o Thiago de verdade desde o primeiro dia"
      inputMaxLength={7}
      hint="lugar"
      onSubmitAction={answerLevelSix}
    />
  );
}