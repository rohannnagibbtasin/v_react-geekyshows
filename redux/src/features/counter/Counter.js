import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button
                className="button"
                type="button"
                aria-label="Increment Value"
                onClick={() => setCount((prev) => prev + 1)}
            >
                {' '}
                +
            </button>
            <span className="value">Count {count}</span>
            <button
                className="button"
                type="button"
                aria-label="Decrement Value"
                onClick={() => setCount((prev) => prev - 1)}
            >
                {' '}
                -{' '}
            </button>
        </div>
    );
}
