"use client";
import React from "react";
import css from "./style.module.css";
import { MdDeleteOutline } from "react-icons/md";

const ProductItem = ({ product }) => {
  const { name, purchase_price, sale_price, date, id } = product;

  const profit = sale_price - purchase_price
  return (
    <tr className={css.row}>
      <td className={css.row__item}>{name}</td>
      <td className={css.row__item}>{purchase_price}</td>
      <td className={css.row__item}>{sale_price}</td>
      <td className={css.row__item}>{profit}</td>
      <td className={css.row__item}><button className={css.delete__button}>Delete <MdDeleteOutline size={30}/></button></td>
    </tr>
  );
};

export default ProductItem;
