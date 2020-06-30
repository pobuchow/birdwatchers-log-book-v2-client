import React from 'react';
import ReactDOM from 'react-dom';
import Login from './../Login';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import {
    queryByTestId
} from '@testing-library/dom'

afterEach(cleanup);

it('renders with username and pass fields without crashing', () => {
    const div = document.createElement('div');
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>, div);
    expect(
        queryByTestId(document.documentElement, 'login-username-field'),
    ).toBeInTheDocument();
    expect(
        queryByTestId(document.documentElement, 'login-password-field'),
    ).toBeInTheDocument()
})
