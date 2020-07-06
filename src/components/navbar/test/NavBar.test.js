import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './../NavBar';
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

it('renders navbar with title', ()=>{
    const {getByTestId} = render(
    <BrowserRouter>
        <NavBar title='TEST TITLE'/>
    </BrowserRouter>);
    expect(getByTestId('navbar-title')).toHaveTextContent('TEST TITLE');
})

it('renders navbar with button login when user is null', ()=>{
    const {getByTestId} = render(
        <BrowserRouter>
            <NavBar title='TEST TITLE' user={null}/>
        </BrowserRouter>);
    expect(getByTestId('navbar-login-button')).toHaveTextContent('Login');
    expect(
        queryByTestId(document.documentElement, 'navbar-logout-button'),
      ).not.toBeInTheDocument()
})

it('renders navbar with button logout when user is logged', ()=>{
    const user = {username: 'mockedUser'};
    const {getByTestId} = render(
        <BrowserRouter>
            <NavBar title='TEST TITLE' user={user} />
        </BrowserRouter>);
    expect(getByTestId('navbar-logout-button')).toHaveTextContent('Logout');
    expect(
        queryByTestId(document.documentElement, 'navbar-login-button'),
      ).not.toBeInTheDocument()
})