import React, { useState } from "react";
import './lazy-grid.scss'; 
import { useFetchGrid } from "./useFetchGrid";

const LazyGrid = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  // const [products, setProducts] = useState([]);
  // const [total, setTotal] = useState(0);


  const {products, total, error, loading } = useFetchGrid('https://dummyjson.com/products?limit=20&skip=', count);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://dummyjson.com/products?limit=20&skip=${
  //           count === 0 ? 0 : count * 20
  //         }`
  //       );
  //       const data = await response.json();
  //       if (data) {
  //         setLoading(false);
  //         setError(false);
  //         setProducts((prevProducts) => [...prevProducts, ...data.products]);
  //         setTotal(data.total);
  //       }
  //     } catch (e) {
  //       setError(e);
  //       setLoading(false);
  //     }
  //   };
  //   fetchProducts();
  // }, [count]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  // Dont change any state from fetched data. only use it in jsx
  // if (data) {
  //   setProducts((prevProducts) => [...prevProducts, ...data.products]);
  //   setTotal(data.total);
  // }

  return (
    <div className="grid-container">
      <div className="products-container">
        {products &&
          products.length > 0 &&
          products.map((product) => <div className="product" key={'product-'+product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>
        )}
      </div>
      <div className="button-container">
        <button disabled={total === products.length - 20} onClick={() => setCount((prevCount) => prevCount + 1)}>Load More Products</button>
        {total === products.length - 20 && (<div>There are no more products.</div>)}
      </div>
    </div>
  );
};

export default LazyGrid;
