"use client";
import React from "react";
import css from "./style.module.css";

const ProductItem = ({ product }) => {
  const { name, purchase_price, sale_price, date, id } = product;
  return (
    <tr className={css.row}>
      <td className={css.row__item}>{name}</td>
      <td className={css.row__item}>{purchase_price}</td>
      <td className={css.row__item}>{sale_price}</td>
    </tr>
  );
};

export default ProductItem;
