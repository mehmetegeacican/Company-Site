import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component{
  render(){
      //console.log(this.props);
      const {projects} = this.props;

      return(
          <div className = "dashboard container">
              <div className = "row">
                  <div className = "col s12 m6">
                      <ProjectList projects = {projects}></ProjectList>
                  </div>
                  <div className = "col s12 m5 offset-m1"></div>
                  <Notifications></Notifications>
              </div>
          </div>
      )
  }
    
}
const mapStateProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
}
export default compose(
    connect(mapStateProps),
    firestoreConnect([
        { collection : 'projects'}
    ])
)(Dashboard);