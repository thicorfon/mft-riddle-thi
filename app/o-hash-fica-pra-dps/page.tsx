'use client'
import Form from "../../components/form";
import { answerLevelThree } from "../server-actions";

export default function Page() {

  return (
    <Form
      title="Nível 3 (Maria Fernanda): Apelidos"
      image={{ src: "/flor.jpg", alt: "Não é prima", width: 1920, height: 960 }}
      question="A Maria Fernanda possui muitos nomes, qual o mais conhecido?"
      inputMaxLength={8}
      hint="nome1_nome2"
      onSubmitAction={answerLevelThree}
    />
  );
}
