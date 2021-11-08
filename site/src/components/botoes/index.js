import React from "react";
import './index.css';



export default function Botoes() {
    return (
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


    )
}