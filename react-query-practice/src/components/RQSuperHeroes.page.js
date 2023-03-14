//fetch react qry
import { Link } from "react-router-dom";
import React, { useState } from "react";
import useSuperHeroesData, {
  useAddSuperHeroData,
} from "../hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const onSuccess = (data) => {
    console.log("Performing side effects after data fetching", data);
  };

  const onError = (error) => {
    console.log("Performing side effects after error encountered", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  const { mutate: addHero } = useAddSuperHeroData();

  const handleAddHeroClick = () => {
    console.log({ name });
    const hero = { name };
    addHero(hero);
  };

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
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddHeroClick}>Add Hero</button>
      {/* <button onClick={refetch}>Fetch super heroes</button>      ==>for enabled:false sathi */}
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={` /rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default RQSuperHeroesPage;
