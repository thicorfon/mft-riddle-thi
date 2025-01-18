'use client'
import Form from "../../components/form";
import { answerLevelThree } from "../server-actions";

export default function Page() {

  return (
    <Form
      title="Nível 3 (Maria Fernanda): Mafê"
      image={{ src: "/flor.jpg", alt: "Não é prima", width: 520, height: 520 }}
      question="MF"
      inputMaxLength={8}
      hint="nome1_nome2"
      onSubmitAction={answerLevelThree}
    />
  );
}
