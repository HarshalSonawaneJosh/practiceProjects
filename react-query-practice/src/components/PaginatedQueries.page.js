import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const fetchSuperHero = (pageNumber) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/users?_limit=2&_page=${pageNumber}`
  );
};
const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["super-hero-perpage", pageNumber], // this takes because of every time we change pagenumber manually it then it will trigger fetch data from an api.
    () => fetchSuperHero(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading ....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        <h2>Paginated Queries Page</h2>
        {data?.data.map((hero) => {
          return (
            <div key={hero.id}>
              <h2>
                {hero.id}. {hero.name}
              </h2>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev page
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 5}
        >
          Next page
        </button>
      </div>
      {isFetching && "Loading"}
    </>
  );
};

export default PaginatedQueriesPage;
