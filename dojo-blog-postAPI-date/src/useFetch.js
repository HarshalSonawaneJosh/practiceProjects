import { useState, useEffect } from "react";
// import { useQuery } from "react-query";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCount = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCount.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data from that resource");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError = null;
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortCount.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
