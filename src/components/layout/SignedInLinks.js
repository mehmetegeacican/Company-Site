import React, {Compononent} from 'react';
import {NavLink,BrowserRouter} from 'react-router-dom';

function SignedInLinks() {
  return (
      <ul className = "right">
          <li><NavLink to = '/'>News</NavLink></li>
          <li><NavLink to = '/create'>New Project</NavLink></li>
          <li><NavLink to = '/'>Logout</NavLink></li>
          <li><NavLink to = '/' className = "btn btn-floating pink lighten-1">CW</NavLink></li>
      </ul>
    
  );
}

export default SignedInLinks;