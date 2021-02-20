import React, {Compononent, Profiler} from 'react';
import {NavLink,BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
      <ul className = "right">
          <li><NavLink to = '/notifications'>News</NavLink></li>
          <li><NavLink to = '/create'>New Project</NavLink></li>
          <li><a onClick = {props.signOut}>Logout</a></li>
          <li><NavLink to = '/' className = "btn btn-floating red accent-3">{props.profile.initials}</NavLink></li>
      </ul>
    
  );
}
const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }

}

export default connect(null,mapDispatchToProps)(SignedInLinks);