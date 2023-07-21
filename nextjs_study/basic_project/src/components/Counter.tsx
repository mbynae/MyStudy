'use client';

import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    // console.log('이건 클라이언트 컴포넌트');
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(num => num + 1)}>숫자 증가</button>
        </>
    );
};

export default Counter;
