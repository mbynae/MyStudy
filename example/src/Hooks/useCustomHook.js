import { useState } from 'react';

const useCustomHook = initialValue => {
    const [data, setData] = useState(initialValue);

    const inputHandler = e => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    return [data, inputHandler];
};

export default useCustomHook;
