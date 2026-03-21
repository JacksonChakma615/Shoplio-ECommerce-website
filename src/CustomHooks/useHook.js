import React, { useEffect, useState } from "react";

const useHook = () => {
  // category  section fetch
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  

  // products section fetch
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return { categorys, products };
};

export default useHook;
