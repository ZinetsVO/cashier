"use client";
import React, { useState } from "react";
import css from "./style.module.css";
import { useProduct } from "@/components/Context";
import { IoIosAddCircle } from "react-icons/io";

const CreateVisit = () => {
  const [show, setShow] = useState(false);
  const [visit, setVisit] = useState(
    {
    

    }
)

  const { products, error } = useProduct();

  if (error) {
    return <p>Помилка при отриманні даних: {error}</p>;
  }

  const handleShow = () => {
    setShow(!show);
  };

  const handleVisit = () => {
    
  }

  return (
    <div>
      {" "}
      {!show ? (
        <div className="container">
          <button onClick={handleShow}>Create visit</button>
        </div>
      ) : (
        <>
          <div className={css.popup__bg}>
            <div className={css.popup}>
              <table className={css.visits__table}>
                <thead>
                  <tr>
                    <th className={css.table__title}>Name</th>
                    <th className={css.table__title}>Sale price</th>
                  </tr>
                </thead>
              {products?.map((product) => (
                  <tr key = {product.id} className={css.row}>
                  <td className={css.row__item}>{product.name}</td>
                  <td className={css.row__item}>{product.sale_price}</td>   
                  <td><button > <IoIosAddCircle size={30}/> Add</button></td>     
                </tr>
              ))}
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateVisit;
