import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './../HomePage';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        , div)
})

it('renders home page with hello text', () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>);
    expect(getByTestId('homepage-hello-text')).toHaveTextContent('Hello');
})

it('renders home page with hello text', () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>);
    expect(getByTestId('homepage-hello-text')).toHaveTextContent('Hello, please log in');
})