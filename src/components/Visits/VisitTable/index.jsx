import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import css from "./style.module.css";



const VisitTable = ({array, priceTable, handleVisit}) => {
  return array?.map((product) => (
    <tr key={product.id} className={css.row}>
      <td className={css.row__item}>{product.name}</td>
      <td className={css.row__item}>{product.sale_price}</td>
      {priceTable ? (
        <>
          <td className={css.row__item}>{product.count}</td>
          <td className={css.row__item}>
            {product.count * product.sale_price}
          </td>
        </>
      ) : (
        <></>
      )}

      <td className={css.button__column}>
        <button
          className={css.button__action}
          onClick={() => handleVisit(product)}
        >
          {priceTable ? <MdOutlineDeleteOutline size={30} /> : <IoIosAddCircle size={30} />}
          {priceTable ? "Delete" : "Add"}
        </button>
      </td>
    </tr>
  ));
};

export default VisitTable;
