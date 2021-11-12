import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/usuario",
});

export default class Service {
  async listUsers(name, token) {
    const resp = await api.get(`?name=${name}`, {
      headers: { "x-access-token": token },
    });
    return resp.data;
  }

  async createUser(user, token) {
    const resp = await api.post("/cadastrar", user, {
      headers: { "x-access-token": token },
    });
    return resp.data;
  }

  async alterUser(userId, newUser, token) {
    const resp = await api.put(`/alterar/${userId}`, newUser, {
      headers: { "x-access-token": token },
    });
    return resp.data;
  }

  async deleteUser(userId, token) {
    const resp = await api.delete(`deletar/${userId}`, {
      headers: { "x-access-token": token },
    });
    return resp.data;
  }

  async login(request) {
    const resp = await api.post("/login", request);
    return resp.data;
  }
}
