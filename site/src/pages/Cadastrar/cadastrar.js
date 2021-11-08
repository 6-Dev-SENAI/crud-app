import React, { useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import ConteudoForms from "../../components/ConteudoForms/conteudo";
import Rodape from "../../components/Rodape/index";
import "../Home/home.css";
import "../Alterar/alterar.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Service from "../../service/userService.js";
const api = new Service();

const Cadastrar = () => {
  const navigation = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");

  const createUser = async () => {
    try {
      const user = {
        name,
        age,
        sex,
      };
      const resp = await api.createUser(user);
      navigation("/");
      toast.success("Usuário cadastrado com sucesso!");
      return resp;
    } catch (error) {
      let err;
      if (!error) err = { code: 0, message: "" };
      else err = error.response.data;
      if (err.code === 404) toast.error(err.message);
      else if (err.code === 400) toast.warning(err.message);
      else toast.warning("Ocorreu um erro desconhecido, tente novamente.");
    }
  };

  const cancel = () => {
    navigation("/");
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
