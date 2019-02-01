import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import './Nav.css'


const Nav = () => {
  return (
    <div>
      <Navbar className="Navbar">
        <NavbarBrand>
        <img src="https://img.icons8.com/small/16/000000/apricot.png" alt='peach' />
        Cosmos
        </NavbarBrand>
      </Navbar>
    </div>
    
  )
}

export default Nav;