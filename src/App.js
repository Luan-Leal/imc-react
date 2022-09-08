import { React, useState } from "react";
import Input from "./components/input";
import Button from "./components/button";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [imc, setImc] = useState("");

  function handleClick(event) {
    event.preventDefault();
    const alt = altura;
    const imc = peso / (alt * alt);
    setImc(imc.toFixed(2));
    console.log(imc.toFixed(2));

    if (altura === "" && peso === "") {
      alert("Preencha o peso  e a altura corretamente !");
    } else if (!alt) {
      alert("Preencha o peso  e a altura corretamente !");
    } else if (imc < 18.5) {
      setMensagem(`Abaixo do peso !`);
    } else if (imc >= 18.5 && imc < 24.9) {
      setMensagem(`Peso normal !`);
    } else if (imc >= 25 && imc < 29.9) {
      setMensagem(`Sobrepeso !`);
    } else if (imc >= 30 && imc < 34.9) {
      setMensagem(`Obesidade Grau I !`);
    } else if (imc >= 35 && imc < 40) {
      setMensagem(`Obesidade Grau II !`);
    } else if (imc >= 40) {
      setMensagem(`Obesidade Grau III !`);
    }
    setPeso("");
    setAltura("");
  }

  return (
    <main>
      <form>
        <h1>Calculo de IMC</h1>
        <div className="input">
          <Input
            title="Peso"
            id="peso"
            onChange={(event) => setPeso(event.target.value)}
            value={peso}
            placeholder="Seu Peso"
          />
          <Input
            title="Altura"
            onChange={(event) => setAltura(event.target.value)}
            value={altura}
            placeholder="Sua Altura"
          />

          <br />
          <Button onClick={handleClick} text="Confirmar" />
          <br />
        </div>
        <div className="resultado">
          <span>Seu IMC é: {imc}</span>
          <span>Status: {mensagem}</span>
        </div>
      </form>
    </main>
  );
}

export default App;
