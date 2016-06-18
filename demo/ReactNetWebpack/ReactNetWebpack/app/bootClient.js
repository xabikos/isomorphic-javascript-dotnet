import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'tether';
import 'bootstrap';

import './styles/style.scss';

import {App} from './components/app';

ReactDOM.render(<App />, document.getElementById('react-app'));
