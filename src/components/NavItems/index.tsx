import React from 'react'
import { Link } from "react-router-dom";
import styles from './NavItems.module.css'

type NavItemType ={
    label : string,
    url?: string,
    icon?: React.ReactNode,
};
function NavItem ({label,icon,url}: NavItemType) {
  return (
    <div className={styles.navitem}>
        <div className={styles.icon}>{icon}</div>
        {/* <a href="">{label}</a> */}
        <Link to={`${url}`}>{label}</Link>
    </div>
  )
}

export default NavItem