import React from "react";
import './index.css';



export default function Botoes() {
    return (
        <div class="container  ">
            <div class="row align-items-end">

                <div class="btn-toolbar  col-sm" role="toolbar" aria-label="Toolbar with button groups">
                    <div class=".btn-group-* " role="group" aria-label="First group">
                        <input type="submit" class="btn btn-primary " value="Salvar" />
                    </div>

                </div>


                <div id="botao2" class="col-sm col align-self-end">
                    <div class=".btn-group-*" role="group" aria-label="Third group">
                        <input type="reset" class="btn btn-danger  " value="Cancelar" />
                    </div>
                </div>

            </div>

        </div>


    )
}