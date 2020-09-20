import React from "react";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";

const App = () => {
  let Pagina = Home;

  const { pathname } = window.location;

  if (pathname == "/produtos") {
    Pagina = Products;
  } else {
    Pagina = Home;
  }
  return (
    <div>
      <Header />
      <Pagina />
    </div>
  );
};

export default App;
