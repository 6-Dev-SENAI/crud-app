import React from "react";
import Botoes from "../botoes";
import './index.css';




export default function Cadastrar() {
    return (

        <div class="container">

            <form id="formulario">
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
                        <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label class="form-check-label" for="gridRadios1">
                                M
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label class="form-check-label" for="gridRadios2">
                                F
                            </label>
                        </div>

                    </div>
                </fieldset>

                <Botoes></Botoes>
            </form>
        </div>







    )
}