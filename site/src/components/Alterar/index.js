import React from "react";
import "../Alterar/altern.css";

export default function Alterar() {
  return (
    <div className="container-fluid container-geral">
      <form id="formulario" class="w-50 mx-auto h-300">
        <div className="Caixas-Texto d-flex p-2 bd-highlight flex-column">
          <div class="input-group mb-3">
            <input
              type="text"
              name="nome"
              class="form-control"
              placeholder=" Insira o nome do novo usuário:"
            />
          </div>

          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              name="idade"
              placeholder="Idade:"
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
              checked
            ></input>
            <label class="form-check-label mx-1" for="flexRadioDefault2">
              Feminino
            </label>
          </div>
        </div>

        <div className="posicao justify-content-between" role="toolbar">
          <div class="btn-group me-2" role="group" aria-label="First group">
            <input
              type="submit"
              class="btn btn-primary text-dark"
              value="Salvar"
            />
          </div>

          <div class="btn-group" role="group" aria-label="Third group">
            <input
              type="reset"
              class="btn btn-danger text-dark"
              value="Cancelar"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
