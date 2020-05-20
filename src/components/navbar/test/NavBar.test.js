import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './../NavBar';

import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<NavBar/>, div)
})

it('renders navbar with title', ()=>{
    const {getByTestId} = render(<NavBar title='TEST TITLE'/>);
    expect(getByTestId('navbar-title')).toHaveTextContent('TEST TITLE');
})

it('renders navbar with title', ()=>{
    const {getByTestId} = render(<NavBar title='TEST TITLE'/>);
    expect(getByTestId('navbar-login-button')).toHaveTextContent('Login');
})