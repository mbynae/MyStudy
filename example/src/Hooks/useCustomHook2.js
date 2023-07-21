import { useState } from 'react';

const useCustomHook2 = initialValue => {
    const [num, setNum] = useState(0);
    const [sum, setSum] = useState(initialValue);

    const onInputNumber = e => {
        setNum(e.target.value);
    };

    const onClick = () => {
        setSum(prev => prev + Number(num));
    };

    return [num, sum, onInputNumber, onClick];
};

export default useCustomHook2;
