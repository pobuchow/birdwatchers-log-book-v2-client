import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './../NavBar';
import { BrowserRouter } from 'react-router-dom';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <NavBar/>
    </BrowserRouter>
    ,div)
})

it('renders navbar with title', ()=>{
    const {getByTestId} = render(
    <BrowserRouter>
        <NavBar title='TEST TITLE'/>
    </BrowserRouter>);
    expect(getByTestId('navbar-title')).toHaveTextContent('TEST TITLE');
})

it('renders navbar with title', ()=>{
    const {getByTestId} = render(
        <BrowserRouter><NavBar title='TEST TITLE'/>
        </BrowserRouter>);
    expect(getByTestId('navbar-login-button')).toHaveTextContent('Login');
})