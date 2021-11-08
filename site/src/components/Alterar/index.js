import React from "react";





export default function Alterar() {
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