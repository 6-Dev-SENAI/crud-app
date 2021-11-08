import React from "react";

import Service from "./userService";
const api = new Service();

export default function TestPage() {
  const user = {
    name: "Teste via Front",
    age: 18,
    sex: "M",
  };

  const newUser = {
    name: "Teste via Front v2",
    age: 18,
    sex: "M",
  };

  const createUser = async () => {
    try {
      const resp = await api.createUser(user);
      console.log(resp);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const readUsers = async () => {
    try {
      const resp = await api.listUsers("");
      console.log(resp);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const updateUser = async () => {
    try {
      const resp = await api.alterUser(6, newUser);
      console.log(resp);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const deleteUser = async () => {
    try {
      const resp = await api.deleteUser(5);
      console.log(resp);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <div>
        <p>CREATE</p>
        <button onClick={createUser}>CREATE</button>
      </div>
      <div>
        <p>READ</p>
        <button onClick={readUsers}>READ</button>
      </div>
      <div>
        <p>UPDATE</p>
        <button onClick={updateUser}>UPDATE</button>
      </div>
      <div>
        <p>DELETE</p>
        <button onClick={deleteUser}>DELETE</button>
      </div>
    </div>
  );
}
