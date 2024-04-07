"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { VISIT_URL } from "@/helpers/constants";
import css from "./style.module.css";

const DetailVisit = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  console.log(id);

  const fetchVisit = async () => {
    try {
      const response = await axios.get(`${VISIT_URL}/${id}`);
      if (response) {
        setData(response.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchVisit();
  }, []);

  return (
    <div className="container">
      <ul className={css.product__list}>
        <li className={css.product__item}>
        <span className={css.item__title}>Name</span>
            <span className={css.item__title}>Count</span>
            <span className={css.item__title}>Purchase price</span>
            <span className={css.item__title}>Sale price</span>
            <span className={css.item__title}>Profit</span>
        </li>
        {data.products?.map((item) => (
          <li className={css.product__item} key={item.id}>
            <span className={css.item__prop}>{item.name}</span>
            <span className={css.item__prop}>{item.count}</span>
            <span className={css.item__prop}>{item.purchase_price}</span>
            <span className={css.item__prop}>{item.sale_price}</span>
            <span className={css.item__prop}>{item.sale_price-item.purchase_price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailVisit;
