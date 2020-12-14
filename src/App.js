import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FastProject from './FastProject/FastProject';
import store from './FastProject/Redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <FastProject />
    </BrowserRouter>
  </Provider>
);

export default App;
