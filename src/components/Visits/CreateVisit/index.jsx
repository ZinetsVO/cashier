"use client";
import React, { useState } from "react";
import css from "./style.module.css";
import { useProduct } from "@/components/Context";
import { IoIosAddCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { FaRegWindowClose } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

const CreateVisit = () => {
  const [show, setShow] = useState(false);
  const [visit, setVisit] = useState([]);

  const { products, error } = useProduct();

  if (error) {
    return <p>Помилка при отриманні даних: {error}</p>;
  }

  const handleShow = () => {
    setShow(!show);
  };

  const handleVisit = (product) => {
    setVisit((prevVisit) => {
      return [...prevVisit, product];
    });
  };

  const totalPrice = visit.reduce((prevValue, item) => {
    return parseInt(prevValue) + parseInt(item.sale_price);
  }, 0);

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
                <table className={css.visits__table}>
                  <thead>
                    <tr>
                      <th className={css.table__title}>Name</th>
                      <th className={css.table__title}>Sale price</th>
                    </tr>
                  </thead>
                  {products?.map((product) => (
                    <tr key={product.id} className={css.row}>
                      <td className={css.row__item}>{product.name}</td>
                      <td className={css.row__item}>{product.sale_price}</td>
                      <td>
                        <button>
                          <IoIosAddCircle
                            size={30}
                            onClick={() => handleVisit(product)}
                          />
                          Add
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>

                <table>
                  <thead>
                    <tr>
                      <th className={css.table__title}>Name</th>
                      <th className={css.table__title}>Sale price</th>
                    </tr>
                  </thead>
                  {visit?.map((product) => (
                    <tr key={product.id} className={css.row}>
                      <td className={css.row__item}>{product.name}</td>
                      <td className={css.row__item}>{product.sale_price}</td>
                      <td>
                        <button className={css.button__delete}>
                          <MdOutlineDeleteOutline size={30} />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className={css.row__item}>Total</td>
                    <td className={css.row__item}> {totalPrice}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateVisit;
