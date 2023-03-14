import { useQuery } from "react-query";
import axios from "axios";

export const useMyHook = () => {
  const fetchUsers = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };

  return useQuery("my-key", fetchUsers);
};
