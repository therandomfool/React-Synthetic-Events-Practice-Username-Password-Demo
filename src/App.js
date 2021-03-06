import React, { useState } from 'react';

import './App.css'

const App= () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ showPassword, setShowPassword] = useState(false);

    return (
        <div className='container'>   
            <input
                type='text'
                placeholder = 'Enter username'
                value = {username}
                onChange ={(e) => setUsername(e.target.value)}
            />
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder = 'Enter password'
                value = {password}
                onChange ={(e) => setPassword(e.target.value)}
            />
            <h2>USERNAME: { username }</h2>
            
            <h2>PASSWORD: { showPassword ? password: '*'.repeat(password.length) }</h2>
            <button onClick={(e) => setShowPassword(!showPassword)}>Show or Hide Password</button>
        </div>
    )

}



export default App;