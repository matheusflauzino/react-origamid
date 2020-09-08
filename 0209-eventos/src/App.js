import React from "react";

const App = () => {
  function handleClick(event) {
    console.log(event.target);
  }

  return (
    <div>
      <button onClick={handleClick}>Clique</button>
      <hr />
      <button onClick={(event) => alert(event.target.innerText)}>Botão</button>
      <hr />
    </div>
  );
};

export default App;
