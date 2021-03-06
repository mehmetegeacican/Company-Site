import React, {Component} from 'react';
import {Link,BrowserRouter} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

const Navbar = (props) => {
  const {auth,profile} = props;
  //console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile}></SignedInLinks> : <SignedOutLinks></SignedOutLinks>;
  return (
    <nav className = "nav-wrapper blue darken-3">
        <div className = "container">
            <Link to = '/' className = "brand-logo">CompanyX</Link>
            {auth.isLoaded && links}
            
        </div>
    </nav>
  );
}


const mapStateToProps = (state) =>{
  return {
    auth: state.fireAuth.auth,
    profile: state.fireAuth.profile
  }
}
export default connect(mapStateToProps)(Navbar);