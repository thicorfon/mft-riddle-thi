'use client'
import Form from "../../components/form";
import { answerLevelFinal } from "../server-actions";

export default function Page() {

  return (
    <Form
      title="Nível Final: Um pequeno passo para o nosso casamento"
      image={{ src: "/magia.jpg", alt: "", width: 1920, height: 960}}
      question="Then I took an arrow to the ()"
      inputMaxLength={16}
      hint="lugar_exacto"
      onSubmitAction={answerLevelFinal}
    />
  );
}