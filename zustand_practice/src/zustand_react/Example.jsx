import React, { useCallback, useReducer, useState } from 'react';

const useForceUpdate = () => {
    const [, forceUpdate] = useReducer(n => n + 1);

    // const [, setState] = useState(0);
    // const forceUpdate = useCallback(() => setState(prev => prev + 1), []);

    return forceUpdate;
};

const Example = () => {
    const forceUpdate = useForceUpdate();

    console.log('rendered');
    return <button onClick={forceUpdate}>Click me to see re-render</button>;
};

export default Example;
