import React, { useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Login from "../../components/Login/log";
import Rodape from "../../components/Rodape";
import { toast } from "react-toastify";
import "../Home/home.css";
import "../Logar/login.css";
import { useNavigate } from "react-router";

import Service from "../../service/userService.js";
const api = new Service();

const Logar = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const request = {
        email,
        password,
      };
      const resp = await api.login(request);
      sessionStorage.setItem("@crud/token", resp.token);
      navigation("/consultar");
      toast.success(`Seja bem vindo ${resp.user.name}`);
    } catch (error) {
      let err;
      if (!error) err = { code: 0, message: "" };
      else err = error.response.data;
      if (err.code === 404) toast.error(err.message);
      else if (err.code === 400) toast.warning(err.message);
      else toast.warning("Ocorreu um erro desconhecido, tente novamente.");
    }
  };

  return (
    <div>
      <Cabecalho logout={false}>
        {" "}
        <p className="titulo text-uppercase ">
          <ins>LOGIN</ins>
        </p>
      </Cabecalho>
      <div className="posicaoAlt">
        <Login
          func={login}
          email={{ email, setEmail }}
          password={{ password, setPassword }}
        />
      </div>
      <div className="fotfot fixed-bottom">
        <Rodape />
      </div>
    </div>
  );
};

export default Logar;
