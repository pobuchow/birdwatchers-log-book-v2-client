import React from 'react';
import ObservationPanel from './../observation/panel/ObservationPanel';

export default function HomePage(props) {

return (
    <div data-testid="homepage-hello-text" >
        Hello, {props.user ? props.user.username : ' please log in'}
        {props.user ? <ObservationPanel size = {10} /> : ''}
    </div>
);
}
