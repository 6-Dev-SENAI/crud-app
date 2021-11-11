import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/usuario",
});

export default class Service {
  async listUsers(name) {
    const resp = await api.get(`?name=${name}`);
    return resp.data;
  }

  async createUser(user) {
    const resp = await api.post("/cadastrar", user);
    return resp.data;
  }

  async alterUser(userId, newUser) {
    const resp = await api.put(`/alterar/${userId}`, newUser);
    return resp.data;
  }

  async deleteUser(userId) {
    const resp = await api.delete(`deletar/${userId}`);
    return resp.data;
  }
}
