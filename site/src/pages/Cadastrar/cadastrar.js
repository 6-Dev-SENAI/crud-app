import React, { useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import ConteudoForms from "../../components/ConteudoForms/conteudo";
import Rodape from "../../components/Rodape/index";
import "../Home/home.css";
import "../Alterar/alterar.css";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

import Service from "../../service/userService.js";
const api = new Service();

const Cadastrar = () => {
  const location = useLocation();
  const { token } = location.state;

  const navigation = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    try {
      const user = {
        name,
        age,
        sex,
        email,
        password,
      };
      const resp = await api.createUser(user, token);
      navigation("/consultar", { state: { token } });
      toast.success("Usuário cadastrado com sucesso!");
      return resp;
    } catch (error) {
      let err;
      if (!error) err = { code: 0, message: "" };
      else err = error.response.data;
      if (err.code === 404) toast.error(err.message);
      else if (err.code === 400) toast.warning(err.message);
      else if (err.code === 401) {
        toast.warning(err.message);
        navigation("/");
      } else toast.warning("Ocorreu um erro desconhecido, tente novamente.");
    }
  };

  const cancel = () => {
    navigation("/consultar", { state: { token } });
  };

  return (
    <div>
      <Cabecalho>
        <p className="titulo text-uppercase">
          <ins>Cadastrar</ins>
        </p>
      </Cabecalho>
      <div className="posicaoAlt">
        <ConteudoForms
          saveFunc={createUser}
          cancelFunc={cancel}
          name={{ name, setName }}
          age={{ age, setAge }}
          sex={{ sex, setSex }}
          email={{ email, setEmail }}
          password={{ password, setPassword }}
          disable={false}
          label={"Salvar"}
        />
      </div>
      <div className="fotfot fixed-bottom">
        <Rodape />
      </div>
    </div>
  );
};

export default Cadastrar;
