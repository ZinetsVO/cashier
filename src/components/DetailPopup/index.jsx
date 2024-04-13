import React, { useCallback, useEffect } from "react";
import ProductTable from "../Visits/ProductTable";

import css from "./style.module.css";
import { VISIT_URL } from "@/helpers/constants";
import { useProduct } from "@/components/Context";
import classNames from "classnames";
import { FaXmark } from "react-icons/fa6";

const DetailPopup = ({ data, setData, setShowPopup, id }) => {
  // data: obj

  const { fetchProducts, products } = useProduct();

  //   const handleEdit = useCallback((id, formData) => {
  //     try {
  //       const response = axios.put(`${VISIT_URL}/${id}`, formData, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       return response;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }, []);

  const handleVisit = (product) => {
    const doubleProduct = data.products?.find((item) => item.id === product.id);

    if (doubleProduct) {
      setData( (prevData) => {
        const  updateProducts = prevData.products.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      )
        const newProducts = {...prevData, products: [...updateProducts]}
        return newProducts
      })
    } else {
      setData((prevData) => {
        const newData = {
          ...prevData,
          products: [...prevData.products, { ...product, count: 1 }],
        };

        return newData;
      });
    }

    setShowPopup(false);
  };

  const handleShow = () => {
    setShowPopup(false);
  };

  return (
    <div className={css.popup__bg}>
      <div className={css.popup}>
        <button
          onClick={handleShow}
          className={classNames("red__button", css.button__close)}
        >
          <FaXmark size={30} />
        </button>
        <ProductTable handleVisit={handleVisit} />
      </div>
    </div>
  );
};

export default DetailPopup;
