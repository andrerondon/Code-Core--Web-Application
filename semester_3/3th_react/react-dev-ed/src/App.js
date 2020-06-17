import React, { useState } from 'react';
import Tweet from './tweet'


function App() {
    const [isRed, setRed] = useState(false)
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount (count + 1);
        setRed(!isRed);
    }

    const [users, setUsers] = useState ([
        { name: "Ed", message: "Hello There"},
        { name: "André", message: "Hello There"},
        { name: "Another", message: "Hello There"}
    ])
    return  (
        <div className="app">
            <h1 className= {isRed ? "red" : ""} > Change Color</h1>
            <button onClick={increment}>Increment</button>
            <h1> { count } </h1>
            {users.map(user => (
                <Tweet name={user.name} message={user.message} />
            ))}
        </div>
        
    );
}


export default App;
