import React from "react";
import css from "./style.module.css"
import Image from "next/image";
import logo from "@/static/logo.svg"

const Header = () => {
  return (
    <header className={css.header}>
    <div className="container">
      <div className={css.header__inner}>
      <Image src={logo} alt = "logo" width={120} height={120}/>
        <ul className={css.nav__list}>
            <li className={css.header__item}><a href="#">Products</a></li>
            <li className={css.header__item}><a href="#">Today`s visit</a></li>
            <li className={css.header__item}><a href="#">Monthly visits</a></li>
        </ul>
      </div>
    </div>

    </header>
  );
};

export default Header;
