'use client'
import Form from "../../components/form";
import { answerLevelSeven } from "../server-actions";

export default function Page() {

  return (
    <Form
      title="Nível 7: Aposto que vocês não conseguem decodificar essa..."
      image={{ src: "/streisand.jpg", alt: "chacara", width: 520, height: 520 }}
      question="Primeiro Casamento"
      inputMaxLength={14}
      hint="lugar_da_pessoa"
      onSubmitAction={answerLevelSeven}
    />
  );
}