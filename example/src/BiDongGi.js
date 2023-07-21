import React, { useState } from 'react';

const BiDongGi = () => {
    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    const [third, setThird] = useState();
    const [result, setResult] = useState();

    const onChange = e => {
        const { name, value } = e.target;
        if (name === 'first') {
            setFirst(parseInt(value));
        } else if (name === 'second') {
            setSecond(parseInt(value));
        } else if (name === 'third') {
            setThird(parseInt(value));
        }
    };

    const onSubmit = e => {
        e.preventDefault();
        setResult(first + second + third);

        setFirst('');
        setSecond('');
        setThird('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="number" name="first" value={first} onChange={onChange} />
            <input type="number" name="second" value={second} onChange={onChange} />
            <input type="number " name="third" value={third} onChange={onChange} />
            <button>출력</button>
            <div>{result}</div>
        </form>
    );
};

export default BiDongGi;
