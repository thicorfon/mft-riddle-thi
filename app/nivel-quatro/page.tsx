'use client'
import Form from "../../components/form";
import { answerLevelFour } from "../server-actions";

export default function Page() {

  return (
    <Form
      title="Nível 4 (Maria Fernanda): Viajante"
      image={{ src: "/latim.png", alt: "nem parece", width: 1920, height: 960 }}
      question="MF já visitou 16 países. Qual está faltando?"
      inputMaxLength={7}
      hint="pais"
      onSubmitAction={answerLevelFour}
    />
  );
}
