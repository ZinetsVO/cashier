import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import css from "./style.module.css";
import { IoAddCircleOutline } from "react-icons/io5";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShow(false)
  };

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div className={css.form__wrapper}>
      {!show ? (
        <button onClick={()=> handleShow()}>
          <IoAddCircleOutline size={50} />
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
          <label>
            <input
              type="number"
              placeholder="purchase price"
              name="purchase_price"
              onChange={handleChange}
              value={formData.purchase_price}
            />
          </label>
          <label>
            <input
              type="number"
              placeholder="sale price"
              name="sale_price"
              onChange={handleChange}
              value={formData.sale_price}
            />
          </label>

          <button>Add</button>
        </form>
      )}
    </div>
  );
};

export default AddProduct;
