import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (
    input1.trim().length < 3 ||
    input1.trim()[0] === " " ||
    input2.length < 6
  ) {
    setError("Por favor chequea que la información sea correcta");
    return;
  }
  setError("");

  return (
    <div>
      <form>
        <label> Ingresa tu nombre</label>
        Input 1:
        <input
          type="text"
          name="input1"
          value={input1}
          onChange={handleInputChange}
        />
        <label>Ingresa que genero de musica prefieres</label>
        Input 2:
        <input
          type="text"
          name="input2"
          value={input2}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <p>{error}</p>}

      <h2>Ingresa tu nombre{input1}</h2>
      <h2>Ingresa que genero de musica prefieres{input2}</h2>

      <Card input1={input1} input2={input2} />
    </div>
  );
};

export default Form;
