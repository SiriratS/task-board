import React from 'react';
import ReactDOM from 'react-dom';
import Board from './pages/board/board';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faEdit, faSave, faTimes);

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
