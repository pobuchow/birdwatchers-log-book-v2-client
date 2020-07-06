import React from 'react';

export default function HomePage(props) {

return (
    <div data-testid="homepage-hello-text" >
        Hello, {props.user ? props.user.username : ' please log in'}
    </div>
);
}
