'use client'
import Form from "../../components/form";
import { answerLevelSix } from "../server-actions";

export default function Page() {

  return (
    <Form
      title="Nível 6: Aposto que vocês não conseguem decodificar essa..."
      image={{ src: "/streisand.jpg", alt: "chacara", width: 1920, height: 960}}
      question="2019: Primeiro Casamento"
      inputMaxLength={14}
      hint="lugar_da_pessoa"
      onSubmitAction={answerLevelSix}
    />
  );
}