'use client'
import FormAudio from "../../components/form-audio";
import { answerLevelFive } from "../server-actions";

export default function Page() {

  return (
    <FormAudio
      title="Nível 5: O Tutorial Acabou"
      audio={{ src: "/arepo.mp3", alt: "magnifico", type:"audio/mpeg"}}
      question="2018: Qual o primeiro filme que nós vimos juntos?"
      inputMaxLength={17}
      hint="nome_do_filme"
      onSubmitAction={answerLevelFive}
    />
  );
}