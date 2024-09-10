import React, { useEffect, useState } from "react";

const ScrollProgress = ({ url }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchProducts = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.products);
    } catch (e) {
      console.log("err: ", e);
      setError(e);
    }
  };

  const handleScroll = () => {
    // console.log(
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    const scroll = document.documentElement.scrollTop;
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentage = (scroll / totalHeight) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    fetchProducts(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  if (error) return <div>Error occured</div>;

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: `${scrollPercentage}%`,
          height: "10px",
          backgroundColor: "green",
        }}
      ></div>
      <pre>{JSON.stringify(scrollPercentage, null, 2)}</pre>
      <h1>Custom scroll indicator</h1>
      <div>
        {data && data.length > 0 && data.map((item) => <p>{item.title}</p>)}
      </div>
      <pre>{JSON.stringify(scrollPercentage, null, 2)}</pre>
    </div>
  );
};

export default ScrollProgress;
