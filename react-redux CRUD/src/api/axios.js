import axios from "axios";

const instance = axios.create({ baseURL: "https://reqres.in/api" });

export const GET = (url, params) => {
  console.log(params);
  return instance.get(url, { params }).then((res) => res.data);
};

export const PATCH = (url, payload) => {
  console.log("payload", payload);
  return instance.patch(url, payload).then((res) => res);
};

export const DELETE = (url) => {
  console.log("delete");
  return instance.delete(url).then((res) => {
    return res.data;
  });
};
export const POST = (url, payload) => {
  console.log("POST", payload);
  return instance.post(url, payload).then((res) => {
    return res.data;
  });
};
