import React from 'react';
import { Link } from 'react-router-dom';

import './logo.css';
import logo from '../../../assets/logo.png';

const Logo = () => {
return(
  <div className="logo">
    <Link to='/'> <img src={logo} alt="Logo" /> </Link>
  </div>
  );
}
export default Logo;
