//fetch react qry
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RQSuperHeroesPage = () => {
  const fetchSuperHeroes = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };

  const onSuccess = (data) => {
    console.log("Performing side effects after data fetching", data);
  };

  const onError = (error) => {
    console.log("Performing side effects after error encountered", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heros",
    fetchSuperHeroes,
    {
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
    }
  );
  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2> RQ Super Heroes Page</h2>
      {/* <button onClick={refetch}>Fetch super heroes</button>      ==>for enabled:false sathi */}
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroesPage;
