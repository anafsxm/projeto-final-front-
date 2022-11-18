import axios from "axios";

export const api = (request) => {
  const fetch = axios.create({
    baseURL: "https://coffea-368123.uc.r.appspot.com/v1/",
  });
  return fetch({ ...request, headers: { ...request.headers } });
};
