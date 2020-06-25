import React, { useState } from 'react';

export default function HomePage() {
    const [user] = useState(JSON.parse(localStorage.getItem('user')));

return (
    <div>
        Hello, {user ? user.username : 'Hello, please log in'}
    </div>
);
}
