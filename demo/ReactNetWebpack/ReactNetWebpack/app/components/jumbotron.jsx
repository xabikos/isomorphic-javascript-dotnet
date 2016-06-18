import React from 'react';

import logo from '../images/logo.png';

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-5">Hello, Developers!</h1>
      <p className="lead">
        This is an example application to demonstrate how we can use Reactjs.NET with Webpack in an ASP.NET application.
      </p>
      <img src={logo} alt="github" />
    </div>
  </div>
);

export default Jumbotron;
