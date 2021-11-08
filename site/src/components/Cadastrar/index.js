import React from "react";
import Botoes from "../botoes";
import './index.css';




export default function Cadastrar() {
    return (
        <div id="container-fluid container-geral " class="vw-100 p-0 m-0">
            <div id="agrupar">
                <form id="formulario" class="w-50 mx-auto h-300">

                    <div class="input-group mb-3">
                        <input type="text" name="nome" class="form-control" placeholder=" Insira o nome do novo usuário:" />
                    </div>


                    <div class="input-group mb-3 ">
                        <input type="number" class="form-control" name="idade" placeholder="Idade:" />
                    </div>


                    <div id="sexo">
                        Insira o Sexo:
                        <div class="form-check form-check-inline">
                            F
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">

                            </label>
                        </div>


                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked" checked >
                                M
                            </label>
                        </div>


                    </div>


                    <Botoes></Botoes>




                </form>

            </div >

        </div>
    )
}