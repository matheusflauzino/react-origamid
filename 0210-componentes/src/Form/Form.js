import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <React.Fragment>
      <form action="">
        <p>
          <label htmlFor="nome">Nome</label>
          <Input />
        </p>

        <p>
          <label htmlFor="email">Nome</label>
          <Input />
        </p>
        <Button />
      </form>
    </React.Fragment>
  );
}

export default Form;
