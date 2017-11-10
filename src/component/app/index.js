import React from 'react';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import TextContainer from '../text-container';
import AboutContainer from '../about-container';
import ContactContainer from '../contact-container';
import TestmContainer from '../testm-container';
import ProjectsContainer from '../projects-container';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="application">
        <BrowserRouter>
          <div>
            <Navbar/>
            <Route exact path="/" component={TextContainer}/>
            <Route exact path="/about" component={AboutContainer}/>
            <Route exact path="/contact" component={ContactContainer}/>
            <Route exact path="/testimonials" component={TestmContainer}/>
            <Route exact path="/projects" component={ProjectsContainer}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
