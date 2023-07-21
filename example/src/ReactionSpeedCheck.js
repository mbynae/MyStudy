import React, { useEffect, useState } from 'react';

const msCheck = () => {
    const check = new Date().getTime();
    return check;
};

const randomSecond = () => {
    const second = Math.floor(Math.random() * 3000);
    return second;
};

const ReactionSpeedCheck = () => {
    const [color, setColor] = useState('start');
    const [text, setText] = useState('시작');
    const [second, setSecond] = useState(new Date().getTime());
    const [result, setResult] = useState('');

    const onClick = e => {
        if (text === '시작') {
            setText('준비');
            setColor('ready');
        }

        if (text === '클릭!') {
            setResult(msCheck() - second);
            setText('다시하기');
            setColor('replay');
        }

        if (text === '다시하기') {
            setText('시작');
            setColor('start');
            setSecond(0);
            setResult('');
        }

        if (text === '준비') {
            setText('실격!');
            setColor('fail');
            setSecond(0);
            setResult('');
        }

        if (text === '실격!') {
            setText('시작');
            setColor('start');
        }
    };

    useEffect(() => {
        let time = '';
        if (text === '준비') {
            time = setTimeout(() => {
                setText('클릭!');
                setColor('go');
                setSecond(msCheck());
            }, randomSecond());
        }

        return () => {
            clearTimeout(time);
        };
    }, [text === '준비']);

    return (
        <div className="reaction_wrap">
            <div className="reaction_title">반응속도 체크 게임!</div>
            {result && <div className="reaction_text">{result}ms 입니다.</div>}
            <div className={`reaction_box ${color}`} onClick={onClick}>
                {text}
            </div>
        </div>
    );
};

export default ReactionSpeedCheck;
