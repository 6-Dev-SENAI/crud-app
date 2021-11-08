import React from "react";
import './index.css';



export default function Botoes() {
    return (

        <div id="botoes" class="col-auto12">

            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group me-2" role="group" aria-label="First group">
                    <input type="submit" class="btn btn-primary" value="Salvar" />
                </div>


                <div class="btn-group" role="group" aria-label="Third group">
                    <input type="reset" class="btn btn-danger" value="Cancelar" />
                </div>
            </div>

        </div>
    )
}