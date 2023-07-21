import React, { useRef, useState } from 'react';

const randomNumber = () => {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr = [];
    for (let i = 0; i < 4; i++) {
        const chose = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        arr.push(chose);
    }

    return arr;
};

const Try = React.memo(({ e, i, record }) => {
    return (
        <div style={{ fontSize: '20px' }}>
            {i + 1}. 입력: [{record[i]}] -&gt; 결과: {e}
        </div>
    );
});

const BullsAndCows = () => {
    const btn = useRef();

    const [quest, setQuest] = useState(randomNumber);
    const [input, setInput] = useState('');
    const [check, setCheck] = useState(false);
    const [record, setRecord] = useState([]);
    const [text, setText] = useState([]);
    const [count, setCount] = useState(0);

    const strikeCheck = quest.filter((e, i) => e === parseInt(input.split('')[i]));
    const nonStrike = quest.filter(e => !strikeCheck.includes(e));
    const ballCheck = nonStrike.filter(e => input.includes(e));
    const textCont = `${strikeCheck.length} 스트라이크 ${ballCheck.length} 볼`;

    const fail = count === 10 && !check;

    const onChange = e => {
        const { value } = e.target;
        const number = value.replace(/[^-0-9]/g, '');
        setInput(number);
    };

    const onSubmit = e => {
        e.preventDefault();
        const correct = strikeCheck.length === 4;

        if (btn.current.innerText === '확인') {
            setCheck(() => (correct ? true : false));
            setRecord([...record, input]);
            setText([...text, textCont]);
            setCount(prev => prev + 1);
        }
        if (btn.current.innerText === '다음') {
            setQuest(randomNumber());
            setCheck(false);
            setRecord([]);
            setText([]);
            setCount(0);
        }
        setInput('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div style={{ marginBottom: '5px', fontSize: '22px', fontWeight: '600' }}>[{check || fail ? quest.join(', ') : '네자리의 숫자'}]</div>
            <label style={{ marginRight: '2px' }}>
                <input type="text" value={input} onChange={onChange} maxLength="4" />
            </label>
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                <button style={{ marginBottom: '10px', marginRight: '10px' }} ref={btn}>
                    {check || fail ? '다음' : '확인'}
                </button>
                <div>시도: [{count}]회</div>
            </span>
            {count > 0 && text.map((e, i) => <Try key={e + i} e={e} i={i} record={record} />)}
            {check && <div style={{ marginTop: '20px', fontSize: '24px' }}>정답입니다.</div>}
            {fail && <div style={{ marginTop: '20px', fontSize: '24px' }}>실패했습니다.</div>}
        </form>
    );
};

Try.displayName = 'Try';
export default BullsAndCows;
