"use client";
import React, { useEffect, useState } from "react";
import CreateVisit from "./CreateVisit";
import { visitURL } from "@/helpers/constants";
import axios from "axios";
import css from "./style.module.css";
import FilterDate from "./FilterDate";
import moment from "moment";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { uk } from "date-fns/locale/uk";
import { VISIT_URL } from "@/helpers/constants";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("uk", uk);

const Visits = () => {
  const [visitData, setVisitData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);

  const getVisits = async () => {
    try {
      const response = await axios.get(VISIT_URL);
      setVisitData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${VISIT_URL}/${id}`);
      if (response) {
        getVisits();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVisits();
  }, []);

  const handleStartDate = (date) => {
    setDateRange([date, dateRange[1]]);
    filtered();
  };

  const handleEndDate = (date) => {
    setDateRange([dateRange[0], date]);
    filtered();
  };

  const filtered = () => {
    const newData = visitData.filter((item) => {
      if (dateRange[0] && dateRange[1]) {
        return moment(item.timestamp).isBetween(
          dateRange[0],
          dateRange[1],
          null,
          "[]"
        );
      }
      return true;
    });

    setFilteredData(newData);

    console.log(newData);
    console.log("filter done!");
  };

  const finalPurchasePrice = filteredData?.reduce((prevValue, item) => {
    return prevValue + item.total_purachse_price;
  }, 0);

  const finalsalePrice = filteredData?.reduce((prevValue, item) => {
    return prevValue + item.total_sale_price;
  }, 0);

  const finalProfit = filteredData?.reduce((prevValue, item) => {
    return prevValue - item.total_purachse_price + item.total_sale_price;
  }, 0);

  return (
    <div className="container">
      <CreateVisit getVisits={getVisits} />

      <FilterDate visitData={visitData} setFilteredData={setFilteredData} />

      <div className={css.column_name_wrapper}>
        <p className={css.column__date}>Date</p>
        <p className={css.column__name}>Name</p>
        <p className={css.column__purchase}>
          Total purchase price: {finalPurchasePrice}
        </p>
        <p className={css.column__sale}>Total sale price: {finalsalePrice}</p>
        <p className={css.column__profit}>Profit: {finalProfit}</p>
      </div>

      <ul className={css.visit__list}>
        {filteredData?.map((item) => (
          <li className={css.visit} key={item.id}>
            <span className={css.visit__date}>
              {moment(item.timestamp).format("DD-MM-YY")}
            </span>
            <ol className={css.visit__products}>
              {item.products.map((i) => (
                <li className={css.visit__product__name} key={i.id}>
                  {i.name}
                </li>
              ))}
            </ol>
            <div className={css.visit__purchase}>
              {item.total_purachse_price}
            </div>
            <div className={css.visit__sale}>{item.total_sale_price}</div>
            <div className={css.visit__profit}>
              {item.total_sale_price - item.total_purachse_price}
            </div>
            <div className={css.delete__wrapper}><button
              onClick={() => handleDelete(item.id)}
              className={css.delete__button}
            >
              Delete
            </button></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Visits;
