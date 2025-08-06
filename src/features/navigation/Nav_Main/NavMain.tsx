import React from 'react'
import styles from "./NavMain.module.css"
import Icon from "@components/ui/Icon";
import {Link, NavLink } from 'react-router-dom';


interface NavMainProps{
  links: string[];
}

const NavMain = ({links}: NavMainProps) => {
    const isLogedIn: boolean = true;
  return (
    <nav className={`${styles.navContainer} h-12`}>
      <Link to="/" className={`${styles.brandWrapper} mx-8 gap-2`}>
        <Icon name="logo" className="w-8 h-8" />
        <h2 className="w-fit font-bold lg:text-2xl min-sm:text-xl">E-MART</h2>
      </Link>

      {/*Dropdown link will be added soon for mobile verison*/}

      <ul className={`${styles.linksWrapper} gap-4 font-medium`}>
        {links.map((link) => {
          const isHome: boolean = link.toLowerCase() === "home";
          const path: string = isHome ? "/" : `/${link.toLowerCase()}`;
          return (
            <li key={link.toLowerCase()} className="px-2">
              <NavLink
                to={path}
                end={isHome}
                className={`${styles.link} hover:text-[var(--primary-sky-blue)] duration-200 ease-in`}
              >
                {link}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className={`${styles.accountWrapper} gap-8 mx-4`}>
        <Link to="/">
          <Icon name="bell" className="w-4 h-4" />
        </Link>
        <Link to="/" className={`${styles.account} gap-1`}>
          <h3 className="text-[12px] font-medium">
            {isLogedIn == true ? "Account" : "Guest"}
          </h3>
          <Icon name="profile" className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}

export default NavMain;
