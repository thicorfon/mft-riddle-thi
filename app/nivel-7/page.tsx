'use client'
import Form from "../../components/form";
import { answerLevelSeven } from "../server-actions";

export default function Page() {

  return (
    <Form
      title="Nível 7: Nossa miga, você viu esse stories?!?!?!?!"
      image={{ src: "/anchieta-imigrantes.jpeg", alt: "reveillon_2122", width: 520, height: 520 }}
      question="Três padrinhos/madrinhas no carro"
      inputMaxLength={14}
      hint="nome_da_banda"
      onSubmitAction={answerLevelSeven}
    />
  );
}