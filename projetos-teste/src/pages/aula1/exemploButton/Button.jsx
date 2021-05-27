import { useState } from 'react';
export default function Button({ title, color }) {
    const [counter, setCounter] = useState(10);

    function increment() {
        if (color === 'green') {
            setCounter(counter + 1)
        }
        if (counter > 0 && color === 'red') {
            setCounter(counter - 1);
        };
        if (color === 'blue') {
            setCounter(counter + 10);
        };
        if(color === 'orange'){
            setCounter(counter * 2);
        }
    };

    return (
        <>
            <span>{counter}</span>
            <button
                style={{ color: color }}
                onClick={increment}>
                {title}
            </button>
        </>
    );
};