import React from "react";
import { Link } from 'react-router-dom';
import classes from '../styles/header.module.css'
import { getAuth } from "firebase/auth";


const Header = () => {

  const currentUser = getAuth();

  return (
    <>
      <nav class={`${classes.navbarFont} navbar bg-dark navbar-expand-lg bg-body-tertiary mb-5`}>
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/" class="nav-link text-white">Inicio</Link>
              <Link to="/ProductList" class="nav-link text-white" href="#">Productos</Link>
              {!currentUser?.currentUser && <Link to="/Login" class="nav-link text-white" href="#">Login</Link>}
              {!currentUser?.currentUser && <Link to="/Register" class="nav-link text-white" href="#">Register</Link>}
              {currentUser?.currentUser && <Link to="/Logout" class="nav-link text-white" href="#">Logout</Link>}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;