"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import css from "./style.module.css"

const Products = () => {
  const TOKEN = process.env.NEXT_PUBLIC_API;
  const URL = `https://${TOKEN}.mockapi.io/product`;

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(URL);
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchProducts();
  }, []);

  console.log(error);
  console.log(products);

  if (error) {
    return <p>Помилка при отриманні даних: {error}</p>;
  }

  return (
    <section>
      <div className="container">
        {error ? (
          <p>Помилка при отриманні даних: {error}</p>
        ) : (
          <table className={css.products__table}>
            <thead>
              <tr >
                <th className={css.table__title}>Name</th>
                <th className={css.table__title}>Purchase price</th>
                <th className={css.table__title}>Sale price</th>
              </tr>
            </thead>
            {products.map((product) => (
            <ProductItem key={product.id} product={product}/>
            ))}
          </table>
        )}
      </div>
    </section>
  );
};

export default Products;
