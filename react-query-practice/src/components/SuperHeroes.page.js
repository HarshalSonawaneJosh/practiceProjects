//fetch data useffct usestte
import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHeroesPage = () => {
  const [isloading, setIsLoading] = useState(true);
  const [data, setdata] = useState("");
  const [error, setErrot] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setdata(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrot(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isloading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default SuperHeroesPage;
