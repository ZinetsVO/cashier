"use client";
import React, { useEffect, useState } from "react";
import CreateVisit from "./CreateVisit";
import { visitURL } from "@/helpers/constants";
import axios from "axios";
import { formatDateString } from "@/helpers";
import css from "./style.module.css";

const Visits = () => {
  const [visitData, setVisitData] = useState([]);

  const getVisits = async () => {
    try {
      const response = await axios.get(visitURL);
      setVisitData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVisits();
  }, []);

  console.log(visitData);

  const test = visitData.map( (item) => {
    console.log(item);

    item.products.map( (i) => {
console.log(i);
    })
  })



  return (
    <>
      <CreateVisit getVisits={getVisits} />

      <ul>
        {visitData?.map( (item) => (
          <li className={css.visit} key={item.id}>
            
              <span className={css.visit__date}>{formatDateString(item.timestamp)}</span>
              <ol className={css.visit__products}>{item.products.map( (i) => (
                <li className={css.visit__product__name} key = {i.id}>{i.name}, </li>
              ))}</ol>
              <div className={css.visit__purchase}>{item.total_purachse_price}</div>
              <div className={css.visit__sale}>{item.total_sale_price}</div>


            
          </li>
        ))}
      </ul>
    </>
  );
};

export default Visits;
