//fetch using react query data
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetcherFunction = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
const RQSuperHeroes = () => {
  const { isLoading, data } = useQuery("super-heroes", fetcherFunction);

  if (isLoading) {
    <div>Loading...</div>;
  }
  return (
    <>
      {data.data.map((user) => {
        return <h2>user.name</h2>;
      })}
    </>
  );
};

export default RQSuperHeroes;
