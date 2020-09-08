import React from "react";

const App = () => {
  const produtos = [<li key="e1">Notebook</li>, <li key="e2">Tablet</li>];
  const filmes = ["Before Sunrise", "Before Sunset", "Before Midle"];
  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];
  return (
    <>
      <div>{produtos}</div>
      <hr />
      <ul>
        {filmes.map((filme) => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>
      <hr />
      <ul>
        {livros.map(({ nome, ano }) => (
          <li>
            {nome} - {ano}
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {livros
          .filter(({ ano }) => ano > 1998)
          .map(({ nome, ano }) => (
            <li key={nome}>
              {nome} - {ano}
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
