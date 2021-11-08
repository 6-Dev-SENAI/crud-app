import React from "react";
import "../Alterar/altern.css";

export default function Alterar() {
<<<<<<< HEAD
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
=======
    return (
        <form>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" />
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Idade</label>
            <div class="col-sm-10">
                <input type="number" class="form-control" id="inputPassword3" />
            </div>
        </div>
        <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">selecione seu sexo:</legend>
            <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                    <label class ="form-check-label" for="gridRadios1">
                    M
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                    <label class ="form-check-label" for="gridRadios2">
                    F
                    </label>
                </div>
               
            </div>
        </fieldset>
      
        <button type="submit" class="btn btn-primary">Salavar </button>
        <button type="submit" class="btn btn-danger">Cancelar</button>
    </form>



    )
}
>>>>>>> eeecf35474e37ad6b40bd9b80e52458aef8634d6
