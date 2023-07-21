import React, { useState } from 'react';

const WordGame = () => {
    const suggested = ['시작', '스타트', '출발', '진행', '고고'][Math.floor(Math.random() * 5)];
    const [word, setWord] = useState(suggested);
    const [input, setInput] = useState('');
    const [check, setCheck] = useState('');

    const onChange = e => {
        const { value } = e.target;
        setInput(value);
    };

    const onClick = () => {
        if (word.charAt(word.length - 1) === input.charAt(0)) {
            setWord(input);
            setCheck(true);
            setInput('');
        } else {
            setCheck(false);
        }
    };

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
            }}
        >
            <h3>{word}</h3>
            <label>
                단어를 입력해주세요.
                <input type="text" value={input} onChange={onChange} />
            </label>
            <button onClick={onClick}>입력</button>
            <div>{check === '' ? null : check ? 'Good' : 'Bad'}</div>
        </form>
    );
};

export default WordGame;
