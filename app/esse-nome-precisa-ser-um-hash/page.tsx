'use client'
import Form from "../../components/form";
import { answerLevelTwo } from "../server-actions";

export default function Page() {

  return (
    <Form
      title="Nível 2 (Thiago): Que cara social"
      image={{ src: "/socials.png", alt: "Redes sociais", width: 1920, height: 960 }}
      question="Vou adicionar o toto numa rede social, qual o user dele mesmo?"
      inputMaxLength={9}
      hint="variação padrão"
      onSubmitAction={answerLevelTwo}
    />
  );
}
