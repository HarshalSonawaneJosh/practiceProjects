import { GET, PATCH, POST, DELETE } from "./api";

export const getTodos = (params) => {
  return GET("/blogs", params);
};

export const getTodoById = (id) => {
  return GET(`/blogs/${id}`);
};
export const patchTodo = (id, body) => {
  return PATCH(`/blogs/${id}`, body);
};
export const postTodo = (body) => {
  return POST("/blogs", body);
};

export const deleteById = (id) => {
  return DELETE(`/blogs/${id}`);
};
