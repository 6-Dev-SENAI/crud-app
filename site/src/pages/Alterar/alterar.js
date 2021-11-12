import React, { useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import ConteudoForms from "../../components/ConteudoForms/conteudo";
import Rodape from "../../components/Rodape";
import "../Home/home.css";
import "./alterar.css";
import { useLocation, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

import Service from "../../service/userService";
const api = new Service();

const PgAlterar = () => {
  const token = sessionStorage.getItem("@crud/token");
  const navigation = useNavigate();

  const location = useLocation();
  let state = location.state || {
    user: { name: "", age: 0, sex: "", email: "", password: "" },
  };

  if (!token) {
    state = { user: { name: "", age: 0, sex: "", email: "", password: "" } };
    navigation("/login");
    toast.warning("Por favor, faça o login!");
  }

  const { user } = state;

  const params = useParams();
  const userId = params.id;

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [sex, setSex] = useState(user.sex);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const updateUser = async () => {
    try {
      const user = {
        name,
        age,
        sex,
        email,
        password,
      };
      const resp = await api.alterUser(userId, user, token);
      navigation("/consultar");
      toast.success("Usuário alterado com sucesso!");
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
    navigation("/consultar");
  };

  return (
    <div>
      <Cabecalho logout={true}>
        <p className="titulo text-uppercase">
          <ins>Alterar</ins>
        </p>
      </Cabecalho>

      <div className="posicaoAlt">
        <ConteudoForms
          saveFunc={updateUser}
          cancelFunc={cancel}
          name={{ name, setName }}
          age={{ age, setAge }}
          sex={{ sex, setSex }}
          email={{ email, setEmail }}
          password={{ password, setPassword }}
          disable={false}
          label={"Salvar alterações"}
        />
      </div>

      <div className="fotfot fixed-bottom">
        <Rodape />
      </div>
    </div>
  );
};

export default PgAlterar;
