"use client";
import React, { useState, useEffect } from "react";
import css from "./style.module.css";
import { useProduct } from "@/components/Context";
import { FaRegWindowClose } from "react-icons/fa";
import VisitTable from "../VisitTable";
import ProductTable from "../ProductTable";
import { visitURL } from "@/helpers/constants";
import axios from "axios";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateVisit = ({ getVisits }) => {
  const [show, setShow] = useState(false);
  const [visit, setVisit] = useState([]);
  const [findProduct, setFindProduct] = useState("");
  const [selectDate, setSelectDate] = useState(new Date());

  const { products, error } = useProduct();

  if (error) {
    return <p>Помилка при отриманні даних: {error}</p>;
  }

  const handleShow = () => {
    setShow(!show);
  };

  const handleVisit = (product) => {
    const doubleProduct = visit.find((item) => item.id === product.id);
    if (doubleProduct) {
      setVisit((prevVisit) =>
        prevVisit.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setVisit((prevVisit) => [...prevVisit, { ...product, count: 1 }]);
    }
  };

  const handleDelete = (id) => {
    const deleteProduct = visit.find((item) => item.id === id);
    if (deleteProduct) {
      setVisit((prevVisit) => prevVisit.filter((item) => item.id !== id));
    }
  };

  const totalSalePrice = visit.reduce((prevValue, item) => {
    return prevValue + item.sale_price * item.count;
  }, 0);
  const totalPurchasePrice = visit.reduce((prevValue, item) => {
    return prevValue + item.purchase_price * item.count;
  }, 0);

  const handleFindProduct = (e) => {
    setFindProduct(e.target.value);
    if (findProduct.length > 0) {
      products.filter((item) => {
        return products.name.includes(findProduct);
      });
    }
  };

  const handleSubmit = async () => {
    const data = {
      products: visit,
      timestamp: selectDate,
      total_purachse_price: totalPurchasePrice,
      total_sale_price: totalSalePrice,
    };

    console.log(data);

    try {
      const response = await axios.post(visitURL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status >= 200 && response.status < 300) {
        setVisit([]);
        setShow(false);
        getVisits();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!show ? (
        <button className={css.create__visit__button} onClick={handleShow}>
          Create visit
        </button>
      ) : (
        <>
          <div className={css.popup__bg}>
            <div className={css.popup}>
              <button className={css.button__close} onClick={handleShow}>
                Close
                <FaRegWindowClose size={30} />
              </button>

              <div className={css.tables__wrapper}>
                <ProductTable handleVisit={handleVisit} />

                <VisitTable
                  visit={visit}
                  setVisit={setVisit}
                  handleDelete={handleDelete}
                />

                <DatePicker
                  wrapperClassName={css.date__wrapper}
                  className={css.date}
                  selected={selectDate}
                  onChange={(date) => setSelectDate(date)}
                  selectsStart
                  dateFormat={"dd-MM-yy"}
                  placeholderText="Enter date"
                  locale={"uk"}
                />
                <button className={css.button__submit} onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateVisit;
