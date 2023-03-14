import axios from "axios";

import { useMutation, useQuery, useQueryClient } from "react-query";

const useSuperHeroesData = (onSuccess, onError) => {
  const fetchSuperHeroes = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };

  return useQuery("super-heros", fetchSuperHeroes, {
    // cacheTime: 5000, //Defaults cache time provides 5 minutes.
    //staleTime: 5000, //Defaults stale time is 0 sec.
    //refetchOnMount: true, //default behaviour for fetching data in nework tab.
    //refetchOnWindowFocus: true, //every time fetch when we update data in vs code or in background.
    /*{refetchInterval: 1000, //automatically query refetch every 1 sec.==>polling
            refetchIntervalInBackground: true,
           }*/
    //enabled: false,  //by using this we provide onClick to user to fetch the data.
    onSuccess,
    onError,
  });
};
const addSuperHero = (hero) => {
  return axios.post("https://jsonplaceholder.typicode.com/users", hero);
};
//for useMutation.

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      //queryClient.invalidateQueries("super-heros");
      queryClient.setQueryData("super-heros", (oldQuerydata) => {
        return {
          ...oldQuerydata,
          data: [...oldQuerydata.data, data.data],
        };
      });
    },
  });
};

export default useSuperHeroesData;
