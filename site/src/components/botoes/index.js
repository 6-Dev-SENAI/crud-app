import React from "react";
import "./index.css";

export default function Botoes(props) {
  const { save, cancel, label } = props;

  return (
    <div className="posicao justify-content-between">
      <div class="btn-group me-2">
        <button class="btn btn-primary text-dark" onClick={save}>
          {label}
        </button>
      </div>

      <div class="btn-group">
        <button type="reset" class="btn btn-danger text-dark" onClick={cancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
