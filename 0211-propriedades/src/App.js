import React, { Children } from "react";
import Form from "./Form/Form";

const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const NovoTitulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <>
      <Titulo cor="red" texto="Meu texto 1" />
      <Titulo cor="blue" texto="Meu texto 2" />
      <NovoTitulo cor="red" texto="Meu texto 1" />
      <NovoTitulo cor="blue" texto="Meu texto 2" />

      <NovoTitulo cor="gray" texto="Conteúdo do Texto">
        Aqui é o Children
      </NovoTitulo>

      <hr />
      <Form action="" />
    </>
  );
};

export default App;
