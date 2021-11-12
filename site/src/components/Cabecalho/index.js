import React from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "../Cabecalho/cabecalho.css";

const Logo = (props) => {
  const navigation = useNavigate();

  const logoutClick = () => {
    sessionStorage.removeItem("@crud/token");
    toast.info("Saindo do sistema...");
    navigation("/");
  };

  const { logout } = props;

  return (
    <header className="container-fluid d-flex align-items-center justify-content-between">
      <div className="container d-flex flex-row bd-highlight justify-content-between pt-3 align-items-center">
        <p className="titulo text-uppercase">CRUD|Six-Dev</p>
        <div className="Info ">{props.children}</div>
      </div>
      <div>
        <button
          onClick={logoutClick}
          className={logout ? "btn btn-secondary" : "btn btn-secondary d-none"}
        >
          Sair
        </button>
      </div>
    </header>
  );
};

export default Logo;
