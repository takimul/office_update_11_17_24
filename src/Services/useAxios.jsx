import axios from "axios";

export const useAxios = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
});
