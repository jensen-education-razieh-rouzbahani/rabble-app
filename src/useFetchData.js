import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    let abortController = new AbortController();
    const getData = async () => {
      try {
        const request = await fetch(url, { signal: abortController.signal });
        const response = await request.json();
        setData(response.offers);
        setIsPending(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => abortController.abort();
  }, [url]);
  return { data, isPending };
};

export default useFetchData;
