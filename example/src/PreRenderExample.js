import { useState } from 'react';
import CountLabel from './component/CountLabel';

export default function PreRenderExample() {
    const [count, setCount] = useState(0);

    const onClick = () => {
        const date = {
            url: 'https://www.naver.com',
        };
        //test.load(JSON.stringify(date));
        localStorage.setItem('aaa', 'bbb');
        test.show('http://localhost:3000');
    };
    return (
        <div style={{ marginTop: '50px' }}>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <CountLabel count={count} />
            <span>{localStorage.getItem('aaa')}</span>
            <button onClick={onClick}>버튼</button>
        </div>
    );
}
