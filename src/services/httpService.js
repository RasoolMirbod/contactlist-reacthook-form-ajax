import axios from "axios";

axios.defaults.baseURL = "http://localhost:3002";

const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
