import axios from "axios";

const API_URL_DEV = "https://192.168.1.104:8443/api/v1";
const API_URL_PROD = "https://api.wordview.cc:8443/api/v1";

export function client(env: "dev" | "prod") {
  return axios.create({
    baseURL: env == "dev" ? API_URL_DEV : API_URL_PROD,
  });
}
