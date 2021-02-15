import React, {Compononent} from 'react';
import {NavLink,BrowserRouter} from 'react-router-dom';

function SignedOutLinks() {
  return (
    <ul className = "right">
        <li><NavLink to = '/signup'>SignUp</NavLink></li>
        <li><NavLink to = '/signin'>Login</NavLink></li>
    </ul>
  );
}

export default SignedOutLinks;