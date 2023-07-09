import axios from "axios";

const api = axios.create({
  baseURL: "https://64ab09950c6d844abedf1f5a.mockapi.io/",
});

export default api;
