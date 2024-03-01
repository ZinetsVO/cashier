"use client";
import React, { useState } from "react";
import css from "./style.module.css";
import { useProduct } from "@/components/Context";
import { IoIosAddCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { FaRegWindowClose } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import VisitTable from "../VisitTable";

const CreateVisit = () => {
  const [show, setShow] = useState(false);
  const [visit, setVisit] = useState([]);
  const [findProduct, setFindProduct] = useState("");

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
  const totalPrice = visit.reduce((prevValue, item) => {
    return prevValue + item.sale_price * item.count;
  }, 0);

  const handleFindProduct = (e) => {
    setFindProduct(e.target.value);
    if (findProduct.length > 0) {
      products.filter((item) => {
        return products.name.includes(findProduct);
      });
    }
  };

  console.log(findProduct);

  return (
    <div>
      {!show ? (
        <div className="container">
          <button onClick={handleShow}>Create visit</button>
        </div>
      ) : (
        <>
          <div className={css.popup__bg}>
            <div className={css.popup}>
              <button className={css.button__close} onClick={handleShow}>
                Close
                <FaRegWindowClose size={30} />
              </button>
              <div className={css.tables__wrapper}>
                {/* <label>
                  <input
                    type="text"
                    placeholder="find product..."
                    value={findProduct}
                    onChange={handleFindProduct}
                  />
                </label> */}

                <table className={css.visits__table}>
                  <thead>
                    <tr>
                      <th className={css.table__title}>Name</th>
                      <th className={css.table__title}>Sale price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <VisitTable
                      array={products}
                      priceTable={false}
                      handleVisit={handleVisit}
                    />
                  </tbody>
                </table>

                <table className={css.visits__table}>
                  <thead>
                    <tr>
                      <th className={css.table__title}>Name</th>
                      <th className={css.table__title}>Sale price</th>
                      <th className={css.table__title}>Count</th>
                      <th className={css.table__title}>Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <VisitTable
                      array={visit}
                      priceTable={true}
                      handleVisit={handleVisit}
                    />

                    <tr>
                      <td className={css.row__item}>Total</td>
                      <td className={css.row__item}> {totalPrice}</td>
                    </tr>
                  </tbody>
                </table>
                <button className={css.button__submit}>Submit</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateVisit;
