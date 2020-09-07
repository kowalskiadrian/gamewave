import React from 'react';
import { Link } from "react-router-dom";

function Nav(){
  return(
    <header>
      <Link to="/" className="logo">GameWave</Link>
      <nav>
        <Link to="/" className="link">Home</Link>
      </nav>
    </header>
  );

}

export default Nav;
