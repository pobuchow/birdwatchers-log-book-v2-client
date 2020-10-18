import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../ObservationPanel';
import { BrowserRouter } from 'react-router-dom';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import {
    queryByTestId
  } from '@testing-library/dom'

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <NavBar/>
    </BrowserRouter>
    ,div)
})