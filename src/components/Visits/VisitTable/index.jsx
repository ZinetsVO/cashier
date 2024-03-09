import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import css from "./style.module.css";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

const VisitTable = ({ visit, handleDelete }) => {
  const totalPrice = visit.reduce((prevValue, item) => {
    return prevValue + item.sale_price * item.count;
  }, 0);

  const increment = (e) => {
    // const productCount =  e.target.value;
    // console.log(productCount);
    //   setVisit((prevVisit) =>
    //     prevVisit.map((item) =>
    //       item.id === product.id ? { ...item, count: item.count + 1 } : item
    //     )
    //   );
  }

  const decrement = (e) => {
    // const productCount =  e.target.value;
    // console.log(productCount);
    //   setVisit((prevVisit) =>
    //     prevVisit.map((item) =>
    //       item.id === product.id ? { ...item, count: item.count + 1 } : item
    //     )
      // );
  }
  return (
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
        {visit?.map((product) => (
          <tr key={product.id} className={css.row}>
            <td className={css.row__item}>{product.name}</td>
            <td className={css.row__item}>{product.sale_price}</td>

            <td className={css.row__item}>
              <button disabled={product.count <= 1} onClick={decrement}>
                <FaMinus />
              </button>
              {product.count}
              <button disabled={product.count >= 20} onClick={increment}>
              <IoMdAdd />
              </button>
            </td>
            <td className={css.row__item}>
              {product.count * product.sale_price}
            </td>

            <td className={css.button__column}>
              <button
                className={css.button__action}
                onClick={() => handleDelete(product.id)}
              >
                <MdOutlineDeleteOutline size={30} />
                "Delete"
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td className={css.row__item}>Total</td>
          <td className={css.row__item}> {totalPrice}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default VisitTable;
