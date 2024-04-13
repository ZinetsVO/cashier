import React from "react";

import css from "./style.module.css";

const DetailList = ({ data }) => {
  return (
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
          <span className={css.item__prop}>
            {item.sale_price - item.purchase_price}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default DetailList;
