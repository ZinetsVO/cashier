"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";

import ProductItem from "./ProductItem";
import css from "./style.module.css";
import AddProduct from "./AddProduct";
import { URL } from "@/helpers/constants";
import { useProduct } from "../Context";
import axios from "axios";


const Products = () => {
  const { products, error, fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) {
    return <p>Помилка при отриманні даних: {error}</p>;
  }
  return (
    <section className={css.product__section}>
      <div className="container">
        <AddProduct />
        {error ? (
          <p>Помилка при отриманні даних: {error}</p>
        ) : (
          <table className={css.products__table}>
            <thead>
              <tr>
                <th className={css.table__title}>Name</th>
                <th className={css.table__title}>Purchase price</th>
                <th className={css.table__title}>Sale price</th>
                <th className={css.table__title}>Profit</th>
                <th className={css.table__title}>Delete</th>
                <th className={css.table__title}>Edit</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Products;
