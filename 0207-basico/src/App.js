import React from "react";

const App = () => {
  const nome = "Matheus";
  const random = Math.random();
  const ativo = true;

  function mostraNome(sobrenome) {
    return "Andre " + sobrenome;
  }

  const carro = {
    marca: "Ferrari",
    rodas: 4,
  };

  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  };
  return (
    <>
      <a href="https://origamid.com.br" className="minhaclass">
        Meu site
      </a>
      <hr />
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
      <hr />
      <p>{nome}</p>
      <hr />
      <p>{random * 100}</p>
      <hr />
      <p className={ativo ? "ativo" : "invativo"}>Conteúdo Ativo</p>
      <hr />
      <p>{true ? "Visível" : "Oculto"}</p>
      <p>{10}</p>
      <p>{mostraNome("Rafael")}</p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p>
        {carro.marca} - {carro.rodas} rodas
      </p>
    </>
  );
};

export default App;
