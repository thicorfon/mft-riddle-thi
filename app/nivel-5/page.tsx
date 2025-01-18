'use client'
import Form from "../../components/form";
import { answerLevelFive } from "../server-actions";

export default function Page() {

  return (
    <Form
      title="Nível 5: O Tutorial Acabou"
      audio={{ src: "/arepo.mp3", alt: "magnifico"}}
      question="Qual o primeiro filme que nós vimos juntos?"
      inputMaxLength={17}
      hint="nome_do_filme"
      onSubmitAction={answerLevelFive}
    />
  );
}