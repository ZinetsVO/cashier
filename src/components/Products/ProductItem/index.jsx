"use client";
import React, { useEffect } from "react";
import css from "./style.module.css";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { URL } from "@/helpers/constants";
import { handleDelete } from "@/helpers/api";

const ProductItem = ({ product }) => {
  const { name, purchase_price, sale_price, date, id } = product;
  


  const onDelete = async () => {
    await handleDelete(id)
  }

  

  const profit = sale_price - purchase_price;
  return (
    <tr className={css.row}>
      <td className={css.row__item}>{name}</td>
      <td className={css.row__item}>{purchase_price}</td>
      <td className={css.row__item}>{sale_price}</td>
      <td className={css.row__item}>{profit}</td>
      <td className={css.row__item}>
        <button className={css.delete__button} onClick={onDelete}>
          Delete <MdDeleteOutline size={30} />
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
