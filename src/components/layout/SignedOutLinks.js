import React, {Compononent} from 'react';
import {NavLink,BrowserRouter} from 'react-router-dom';

function SignedOutLinks() {
  return (
    <ul className = "right">
        <li><NavLink to = '/'>SignUp</NavLink></li>
        <li><NavLink to = '/'>Login</NavLink></li>
    </ul>
  );
}

export default SignedOutLinks;