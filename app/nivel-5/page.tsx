'use client'
import FormAudio from "../../components/form-audio";
import { answerLevelFive } from "../server-actions";

export default function Page() {

  return (
    <Form
      title="Nível 5: O Tutorial Acabou"
      audio={{ src: "/latim.png", alt: "magnifico"}}
      question="2018: Qual o primeiro filme que nós vimos juntos?"
      inputMaxLength={7}
      hint="nome_do_pais"
      onSubmitAction={answerLevelFive}
    />
  );
}
