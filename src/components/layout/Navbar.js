import React, {Compononent} from 'react';
import {Link,BrowserRouter} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Navbar() {
  return (
    <nav className = "nav-wrapper blue darken-3">
        <div className = "container">
            <Link to = '/' className = "brand-logo">CompanyX</Link>
            <SignedInLinks></SignedInLinks>
            <SignedOutLinks></SignedOutLinks>

        </div>
    </nav>
  );
}

export default Navbar;