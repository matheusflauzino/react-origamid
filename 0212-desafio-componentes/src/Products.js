import React from "react";
import Header from "./Header";
import Product from "./Product";
import Title from "./Title";

function Products() {
  const produtos = [
    { nome: "Notebok", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];
  return (
    <section>
      <Title texto="Produtos" />
      <ul>
        {produtos.map((produto) => (
          <Product key={produto.nome} {...produto} />
        ))}
      </ul>
    </section>
  );
}

export default Products;
