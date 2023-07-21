import React, { useState } from 'react';
import useCustomHook from './Hooks/useCustomHook';
import useCustomHook2 from './Hooks/useCustomHook2';

const CustomHookText = () => {
    const [inputText, setInputText] = useCustomHook({
        id: '',
        password: '',
    });
    const [num, sum, onInputNumber, onClick] = useCustomHook2(0);

    // const onInputNumber = e => {
    //     setNum(e.target.value);
    // };

    return (
        <div>
            <label>
                아이디 :
                <input type="text" name="id" value={inputText.id} onChange={setInputText} />
            </label>
            <br />
            <label>
                비번 :
                <input type="password" name="password" value={inputText.password} onChange={setInputText} />
            </label>
            <label>
                <input type="number" name="sum" value={num} onChange={onInputNumber} />
            </label>
            <button type="button" onClick={onClick}>
                더하기
            </button>
            <div>{sum}</div>
        </div>
    );
};

export default CustomHookText;
