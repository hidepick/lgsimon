
import './App.css';
import * as React from 'react'
import { Reset } from 'styled-reset'
import Form from './guide/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Test() {
  return (
    <React.Fragment>
      <Reset />
      <div>test</div>
    </React.Fragment>
  );
}

export default Test;
