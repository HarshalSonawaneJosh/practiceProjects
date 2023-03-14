import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

//fetch superhero and friends
const fetchSuperHeroes = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
const fetchFriends = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);
  return <div>ParallelQueriesPage</div>;
};

export default ParallelQueriesPage;
