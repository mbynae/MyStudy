import { useState } from 'react';

function App() {
    const [text, setText] = useState('');
    const [create, setCreate] = useState([]);

    const onTextHandler = e => {
        const { value } = e.target;
        setText(value);
    };

    const onViewTextHandler = e => {
        e.preventDefault();
        window.ReactNativeWebView?.postMessage(`${text}`);
        setCreate(prev => [...prev, text]);
        setText('');
    };

    return (
        <form onSubmit={onViewTextHandler}>
            <div>
                <input type="text" value={text} onChange={onTextHandler} />
                <button>등록</button>
            </div>
            <div>
                {create.map(arr => {
                    return <li>{arr}</li>;
                })}
            </div>
        </form>
    );
}

export default App;
