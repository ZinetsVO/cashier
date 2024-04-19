"use client";
import React, { useCallback, useEffect, useState } from "react";
import css from "./style.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { useProduct } from "@/components/Context";
import { MdEdit } from "react-icons/md";
import AddProduct from "../AddProduct";
import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { URL } from "@/helpers/constants";
import { BsQuestionCircle } from "react-icons/bs";

const ProductItem = ({ product }) => {
  const { name, purchase_price, sale_price, date, id } = product;
  const profit = sale_price - purchase_price;

  const { fetchProducts } = useProduct();

  const handleDelete = useCallback((id) => {
    try {
      const response = axios.delete(`${URL}/${id}`);
      toast.success("Deleted successfully!");
      return response;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onConfirm = async () =>  {
    const response = await handleDelete(id);
              if (response.status >= 200 && response.status < 300) {
                fetchProducts();
              }
              toast.dismiss(t.id);
  }

  const onDelete = async () => {
    toast(
      (t) => (
        <>
          <h5>Are you sure?</h5>
          <button
            className="blue__button"
            onClick={async () => {await onConfirm
            }}
          >
            Confirm
          </button>
          <button className="red__button" onClick={() => toast.dismiss(t.id)}>No!</button>
        </>
      ),
      {
        icon: <BsQuestionCircle size={20} />,
      }
    );
  };

  return (
    <>
      <tr className={css.row}>
        <td className={css.row__item}>{name}</td>
        <td className={css.row__item}>{purchase_price}</td>
        <td className={css.row__item}>{sale_price}</td>
        <td className={css.row__item}>{profit}</td>
        <td className={css.row__item}>
          <button
            className={classNames("red__button", css.delete__button)}
            onClick={onDelete}
          >
            Delete
            <MdDeleteOutline size={30} />
          </button>
          <Toaster position="top-center" reverseOrder={false} />
        </td>
        <td className={css.row__item}>
          <AddProduct edit product={product} />
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
