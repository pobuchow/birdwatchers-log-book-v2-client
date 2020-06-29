import React, { useState } from 'react';

export default function HomePage() {
    const [user] = useState(JSON.parse(localStorage.getItem('user')));

return (
    <div data-testid="homepage-hello-text" >
        Hello, {user ? user.username : ' please log in'}
    </div>
);
}
