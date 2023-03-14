import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperhero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`https://jsonplaceholder.typicode.com/users/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", heroId], fetchSuperhero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
