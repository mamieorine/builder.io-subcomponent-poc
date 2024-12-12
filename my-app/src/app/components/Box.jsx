import { useState } from 'react';

export const BoxComponent = ({ text }) => {
  const [count, setCount] = useState(0);

  return (
    <div className='text-center'>
      <h1>{text.toUpperCase()}</h1>
      <p>{count}</p>
      <button
        className="border px-4 py-1 mt-2"
        onClick={() => setCount(prev => prev + 1) }>
          Click me
      </button>
    </div>
  );
};
