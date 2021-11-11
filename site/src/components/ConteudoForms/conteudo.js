import React from "react";
import Botoes from "../botoes/index";
import "../ConteudoForms/conteudo.css";

const ConteudoPagina = (props) => {
  const {
    saveFunc,
    cancelFunc,
    name: { name, setName },
    age: { age, setAge },
    sex: { sex, setSex },
    email: { email, setEmail },
    password: { password, setPassword },
    disable,
    label,
  } = props;

  return (
    <div className="container-fluid container-geral">
      <div id="formulario" class="w-50 mx-auto h-300">
        <div className="Caixas-Texto d-flex p-2 bd-highlight flex-column">
          <div class="input-group mb-3">
            <input
              type="text"
              name="nome"
              class="form-control"
              placeholder="Insira o nome do novo usuário:"
              value={name}
              disabled={disable}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              name="nome"
              class="form-control"
              placeholder="Insira o email do novo usuário:"
              value={email}
              disabled={disable}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              name="nome"
              class="form-control"
              placeholder="Insira a senha pro novo usuário:"
              value={password}
              disabled={disable}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              name="idade"
              placeholder="Idade:"
              min={0}
              max={120}
              value={age}
              disabled={disable}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
        </div>
        <div className="Sexo-Checkbox d-flex p-2 bd-highlight flex-row">
          <p className="distancia">Insira o Sexo:</p>
          <div class="form-check mx-1">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={(event) => {
                event.target.checked ? setSex("M") : setSex("F");
              }}
              disabled={disable}
              checked={sex === "M" ? true : false}
            ></input>
            <label class="form-check-label mx-1" for="flexRadioDefault1">
              Masulino
            </label>
          </div>
          <div class="form-check mx-1">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={(event) => {
                event.target.checked ? setSex("F") : setSex("M");
              }}
              disabled={disable}
              checked={sex === "F" ? true : false}
            ></input>
            <label class="form-check-label mx-1" for="flexRadioDefault2">
              Feminino
            </label>
          </div>
        </div>
        <Botoes save={saveFunc} cancel={cancelFunc} label={label} />
      </div>
    </div>
  );
};

export default ConteudoPagina;
