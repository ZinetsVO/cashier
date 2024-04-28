import React from "react";
import css from "./style.module.css";





const Instruction = () => {
  return (
    <div className={css.container__wrapper}>
        <div className="container">
     <div className={css.instruction__wraper}>
      <h2 className={css.instruction__title}>How to use Cashier?</h2>
      <h3>
        This website is designed to simplify the sales and accounting process
        for sellers. It offers the following features:
      </h3>

      <ol  className={css.ordered__list}>
        <li className={css.first__li}>
          <h3 className={css.instruction__subtitle}>Adding and Editing Products:</h3>
          <ul className={css.unordered__list}>
            <li className={css.list__item}>Go to the "Products" section.</li>
            <li  className={css.list__item}>Click the "Add Product" button.</li>
            <li className={css.list__item}>
              Enter the product name, price, cost price, and description
              (optional).
            </li>
            <li className={css.list__item}>Click the "Save" button.</li>
            <li className={css.list__item}>
              You can edit any product by clicking on it and changing its
              details.
            </li>
            <li className={css.list__item}>To delete a product, click the "Delete" button next to it.</li>
          </ul>
        </li>

        <li className={css.first__li}>
          <h3 className={css.instruction__subtitle}>Creating and Managing Visits:</h3>
          <ul className={css.unordered__list}>
            <li className={css.list__item}>Go to the "Visits" section.</li>
            <li className={css.list__item}>Click the "Create Visit" button.</li>
            <li className={css.list__item}>Select from the list the products you have sold.</li>
            <li className={css.list__item}>Enter the number of units sold for each product.</li>
            <li className={css.list__item}>Click the "Save" button.</li>
            <li className={css.list__item}>You can view all your visits, sorting them by date.</li>
            <li className={css.list__item}>To delete a visit, click the "Delete" button next to it.</li>
            <li className={css.list__item}>To view detailed information about a visit, click on it.</li>
          </ul>
        </li>

        <li className={css.first__li}>
          <h3 className={css.instruction__subtitle}>Viewing Visit Details:</h3>
          <ul className={css.unordered__list}>
            <li className={css.list__item}>
              In the "Visits" section, find the visit you are interested in and
              click on it.
            </li>
            <li className={css.list__item}>
              You will see detailed information about the visit, including:
            </li>
            <ul className={css.unordered__list}>
              <li className={css.list__item}>A list of sold products and their quantities.</li>
              <li className={css.list__item}>The total sale amount</li>
              <li className={css.list__item}>The total cost price</li>
              <li className={css.list__item}>The total profit</li>
            </ul>

            <li className={css.list__item}>
              You can edit the number of sold products or the products
              themselves.
            </li>
            <li className={css.list__item}>
              Changes will automatically update the total sale amount, cost
              price, and profit.
            </li>
          </ul>
        </li>

        <li className={css.first__li}>
          <h3 className={css.instruction__subtitle}>Automatic Calculation:</h3>

          <ul className={css.unordered__list}>
            <li className={css.list__item}>
              The website automatically calculates:
              <ul className={css.unordered__list}>
                <li className={css.list__item}>The total sale amount</li>
                <li className={css.list__item}>The total cost price</li>
                <li className={css.list__item}>The total profit</li>
              </ul>
            </li>
            <li className={css.list__item}>
              This data is available for each visit, as well as for all visits
              together.
            </li>
          </ul>
        </li>

        <li className={css.first__li}>
          <h3 className={css.instruction__subtitle}>Additional Features:</h3>

          <ul className={css.unordered__list}>
            <li className={css.list__item}>You can export visit data in CSV format.</li>
            <li className={css.list__item}>You can generate reports on your sales.</li>
            <li className={css.list__item}>You can customize the website to suit your needs.</li>
          </ul>
        </li>

        <li className={css.first__li}>
          <h3 className={css.instruction__subtitle}>Getting Started:</h3>
          <ul className={css.unordered__list}>
            <li className={css.list__item}>
              To get started with the website, you will need to create
              anaccount.
            </li>
            <li className={css.list__item}>
              Once you have created an account, you will be able to products,
              create visits, and view detailed information.
            </li>
          </ul>
        </li>
      </ol>

      <h3 className={css.instruction__subtitle}>We hope this website helps you with your business!</h3>
      </div>

    </div>
    </div>
  );
};

export default Instruction;