import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form({ action }) {
  return (
    <div>
      <form action={action}>
        <Input id="email" label="Email" required />
        <Input id="password" label="Senha" type="password" />
        <Button>Salvar</Button>
      </form>
    </div>
  );
}

export default Form;
