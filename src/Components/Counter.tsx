import { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`You have clicked the first button ${count} times`);
    }, [count]);

    return (
        <div className="card">
            count is {count}
            <button 
                style={{ color: "blue", marginLeft: 20}}
                onClick={() => setCount((count) => count + 1)}>
                Increment
            </button>
            <button
                style={{ color: "green", marginLeft: 10}}
                onClick={() => setCount((count) => count - 1)}>
                Decrement
            </button>
        </div>
    )
}

export default Counter;
