import React, { FC } from 'react';
import styles from './NavBar.module.css';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {

  return (
  
  <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3  navbar-transparent ">
    <div className="container">
      {/* <a className="navbar-brand  text-white" href="#" rel="tooltip" title="Coded by Xiao Yuan Lv" data-placement="bottom" target="_blank">
        Dhammapada
      </a> */}
    </div>
  </nav>
 
);

}
export default NavBar;
