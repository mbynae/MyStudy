import React, { useRef, useState } from 'react';

const GuGUDan = () => {
    const input = useRef();
    const btn = useRef();
    const [num, setNum] = useState({
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        result: '',
        confirm: '',
    });
    const { first, second, result, confirm } = num;

    const onChange = e => {
        setNum({ ...num, result: e.target.value });
    };

    const onClick = () => {
        if (first * second === Number(result)) {
            setNum({ ...num, confirm: true });
        } else {
            setNum({ ...num, confirm: false });
            input.current.focus();
        }
    };

    const onKeyDown = e => {
        if (e.key === 'Enter') {
            btn.current.focus();
        }
    };

    const onNext = () => {
        setNum({
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            result: '',
            confirm: '',
        });
        input.current.focus();
    };

    return (
        <div>
            <div>
                {first} 곱하기 {second} 는?
            </div>
            <input type="number" value={result} onChange={onChange} onKeyDown={onKeyDown} ref={input} />
            <button onClick={() => (confirm ? onNext() : onClick())} ref={btn}>
                {confirm ? '다음 문제' : '확인하기'}
            </button>
            <div>정답: {confirm === '' ? '' : confirm ? '정답' : '오답'}</div>
        </div>
    );
};

export default GuGUDan;
