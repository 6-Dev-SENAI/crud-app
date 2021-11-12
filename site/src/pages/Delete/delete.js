import React, { useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import "../Home/home.css";
import ConteudoForms from "../../components/ConteudoForms/conteudo";
import "../Delete/delete.css";
import { toast } from "react-toastify";
import { useLocation, useParams, useNavigate } from "react-router";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import Service from "../../service/userService";
const api = new Service();

const Deletar = () => {
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

  const params = useParams();
  const userId = params.id;

  const { user } = state;

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [sex, setSex] = useState(user.sex);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const deleteUser = async () => {
    try {
      const resp = await api.deleteUser(userId, token);
      navigation("/consultar");
      toast.success("Usuário deletado com sucesso!");
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

  const options = {
    title: `Deletar ${name}.`,
    message: "Tem certeza que deseja deletar esse usuário?",
    buttons: [
      {
        label: "Sim, tenho certeza!",
        onClick: () => {
          deleteUser();
        },
      },
      {
        label: "Cancelar",
      },
    ],
  };

  const confirmDeleteUser = () => {
    confirmAlert(options);
  };

  const cancel = () => {
    navigation("/consultar");
  };

  return (
    <div>
      <Cabecalho logout={true}>
        <p className="titulo text-uppercase">
          <ins>Deletar</ins>
        </p>
      </Cabecalho>
      <div className="posicaoAlt">
        <ConteudoForms
          saveFunc={confirmDeleteUser}
          cancelFunc={cancel}
          name={{ name, setName }}
          age={{ age, setAge }}
          sex={{ sex, setSex }}
          email={{ email, setEmail }}
          password={{ password, setPassword }}
          disable={true}
          label={"Deletar"}
        />
      </div>
      <div className="fotfot fixed-bottom">
        <Rodape />
      </div>
    </div>
  );
};

export default Deletar;
