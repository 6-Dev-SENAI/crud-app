import React from "react";
import './index.css';



export default function Apagar() {
    return (
        <div id="container-fluid container-geral " class="vw-100 ">
            <form id="formulario" class="w-50 mx-auto h-300 mh-100">

                <div class="input-group mb-3">
                    <input type="text" name="nome" class="form-control" placeholder=" Insira o nome do novo usuário:" />
                </div>


                <div class="input-group mb-3">
                    <input type="number" class="form-control" name="idade"  placeholder="Idade:" />
                </div>


                Insira o Sexo:
                <div class="form-check form-check-inline">
                    F
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        
                    </label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                    <label class="form-check-label" for="flexCheckChecked" checked >
                        M
                    </label>
                </div>

                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <input type="submit" class="btn btn-primary" value="Cancelar" />
                    </div>


                    <div class="btn-group" role="group" aria-label="Third group">
                        <input type="submit" class="btn btn-danger" value="Apagar" />
                    </div>
                </div>
            </form>



        </div>
    )
}