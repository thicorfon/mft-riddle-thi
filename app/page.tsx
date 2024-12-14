import { answerLevelOne } from "./server-actions";
import Form from "../components/form";

export default function Page() {
  return (
    <Form
      title="Nível 1: Mãos para cima!"
      image={{ src: "/hamburguergun.jpg", alt: "Hamburguer com uma arma", width: 520, height: 520 }}
      question="Uma imagem similar a esta era o perfil de Toto, qual o nome da plataforma?"
      inputMaxLength={5}
      hint="armazenamento"
      onSubmitAction={answerLevelOne}
    />
  );
}
