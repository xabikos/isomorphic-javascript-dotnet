import React from 'react';

import NavBar from './navBar.jsx';
import Jumbotron from './jumbotron.jsx';
import ApplicationController from './applicationController.jsx';
import Footer from './footer';

export const App = () => (
  <div>
    <NavBar />
    <Jumbotron />
    <ApplicationController />
    <Footer />
  </div>
);
