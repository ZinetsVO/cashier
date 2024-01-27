import React from "react";
import css from "./style.module.css"
import Image from "next/image";
import logo from "@/static/logo.svg"
import Link from "next/link";

const Header = () => {
  return (
    <header className={css.header}>
    <div className="container">
      <div className={css.header__inner}>
      <Image src={logo} alt = "logo" width={120} height={120}/>
        <ul className={css.nav__list}>
            <li className={css.header__item}><Link href="/product">Products</Link></li>
            <li className={css.header__item}><Link href="/visit">Visits</Link></li>
        </ul>
      </div>
    </div>

    </header>
  );
};

export default Header;
