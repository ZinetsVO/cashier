import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import css from "./style.module.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import { URL } from "@/helpers/constants";
import { handleSubmit } from "@/helpers/api";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    purchase_price: 0,
    sale_price: 0,
  });

  

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const success = await handleSubmit(formData);

    if (success) {
      console.log("Successfull post on MockAPI");
      setFormData(() => ({
        id: uuidv4(),
        name: "",
        purchase_price: 0,
        sale_price: 0,
      }));
    }
  };

  const handleShow = () => {
    setShow(!show);
    setFormData(() => ({
      id: uuidv4(),
      name: "",
      purchase_price: 0,
      sale_price: 0,
    }));
  };

  const isDisabled =
    !formData.name || formData.purchase_price - formData.sale_price >= 0;

  return (
    <>
      <button className={css.add__button} onClick={() => handleShow()}>
        <IoAddCircleOutline size={30} />
      </button>
      {!show ? (
        ""
      ) : (
        <div className={css.form__bg} onClick={handleShow}>
          <div
            className={css.form__wrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={handleShow} className={css.close__button}>
              <FaXmark size={30} />
              Close
            </button>
            <form className={css.form} onSubmit={onSubmit}>
              <label>
                <p>name</p>
                <input
                  className={css.form__input}
                  type="text"
                  placeholder="name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
              <label>
                <p> purchase price</p>

                <input
                  min={0}
                  className={css.form__input}
                  type="number"
                  placeholder="purchase price"
                  name="purchase_price"
                  onChange={handleChange}
                  value={formData.purchase_price}
                />
              </label>
              <label>
                <p> sale price</p>

                <input
                  min={0}
                  className={css.form__input}
                  type="number"
                  placeholder="sale price"
                  name="sale_price"
                  onChange={handleChange}
                  value={formData.sale_price}
                />
              </label>

              <button className={css.confirm__button} disabled={isDisabled}>
                <IoMdCheckmark size={30} />
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProduct;
