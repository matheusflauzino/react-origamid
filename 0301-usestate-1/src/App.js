import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({ nome: "Andre", idade: 30 });

  const [modal, setModal] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Possui faculdade" });
  }
  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>

      <hr />

      <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
