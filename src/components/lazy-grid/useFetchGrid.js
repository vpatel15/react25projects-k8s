import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchGrid = (url, count) => {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}${count === 0 ? 0 : count * 20}`);
        const json = await response.data;
        setProducts((prevProducts) => [...prevProducts, ...json.products]);
        setTotal(json.total);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [count, url]);

  return { products, total, error, loading };
};