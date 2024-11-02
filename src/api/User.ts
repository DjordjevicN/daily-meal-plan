import axios from "axios";

export const getUsers = async () => {
  return axios.get("http://localhost:4000/users");
};

export const addUser = async (user: any) => {
  return axios.post("http://localhost:4000/users", user);
};

export const deleteUser = async (id: string) => {
  return axios.delete(`http://localhost:4000/users/${id}`);
};

export const updateUserById = async (id: string, user: any) => {
  return axios.put(`http://localhost:4000/users/${id}`, user);
};

export const getUserByEmail = async (email: string) => {
  return axios.get(`http://localhost:4000/users?email=${email}`);
};
