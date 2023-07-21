import React, { useEffect, useState } from 'react';
import './style.css';

const circle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ResultCicle = ({ cir, round, check, resultText }) => {
    const [style, setStyle] = useState({
        backgroundColor: '',
        color: '',
    });
    const [text, setText] = useState('');

    useEffect(() => {
        if (cir === round) {
            if (resultText === '승리!') {
                setStyle({ backgroundColor: 'green', color: '#fff' });
                setText('승');
            }
            if (resultText === '무승부') {
                setStyle({ backgroundColor: 'black', color: '#fff' });
                setText('무');
            }
            if (resultText === '패배..') {
                setStyle({ backgroundColor: 'red', color: '#fff' });
                setText('패');
            }
        }

        if (check === 1) {
            setStyle({ backgroundColor: '', color: '' });
            setText('');
        }
    }, [check]);

    return (
        <div className="circle" style={style}>
            {text}
        </div>
    );
};

const RPSButton = ({ onSelect }) => {
    return (
        <div className="RPS_selectBtn">
            <button data-name="1" onClick={onSelect}>
                바위
            </button>
            <button data-name="2" onClick={onSelect}>
                가위
            </button>
            <button data-name="3" onClick={onSelect}>
                보
            </button>
        </div>
    );
};

const RPSResult = ({ pickRPS, resultText }) => {
    let className;

    resultText === '승리!' && (className = 'win');
    resultText === '무승부' && (className = 'draw');
    resultText === '패배..' && (className = 'defeat');

    return (
        <div className="RPS_Result">
            <p>
                {pickRPS.user} VS {pickRPS.ai}
            </p>
            <p className={className}>{resultText}</p>
        </div>
    );
};

const Restart = ({ onStart }) => {
    return (
        <div className="RPS_restartBtn">
            <button onClick={onStart}>다음 라운드 시작</button>
        </div>
    );
};

const AlertResult = ({ closeAlert, settle }) => {
    let whoIsWin;
    let color;

    if (settle.win > 10 - settle.win) {
        whoIsWin = '승리하였습니다.';
        color = 'win';
    }
    if (settle.win === 10 - settle.win) {
        whoIsWin = '비겼습니다.';
        color = 'black';
    }
    if (settle.win < 10 - settle.win) {
        whoIsWin = '패배했습니다.';
        color = 'defeat';
    }

    return (
        <div className="modalBox">
            <div className="RPS_modalWrap">
                <h2>최종결과</h2>
                <div>
                    <p>
                        {settle.win} 대 {10 - settle.draw - settle.win}
                    </p>
                    <p className={color}>{whoIsWin}</p>
                </div>
                <button onClick={closeAlert}>다시하기</button>
            </div>
        </div>
    );
};

const RPS = () => {
    const [state, setState] = useState(true);
    const [round, setRound] = useState(1);
    const [check, setCheck] = useState(1);
    const [img, setImg] = useState(1);
    const [pickRPS, setPickPRS] = useState({
        user: '',
        ai: '',
    });
    const [resultText, setResultText] = useState('');
    const [settle, setSettle] = useState({
        win: 0,
        draw: 0,
    });
    const [alert, setAlert] = useState(false);

    const RPSnameFn = name => {
        if (name === 1) {
            return '바위';
        }
        if (name === 2) {
            return '가위';
        }
        if (name === 3) {
            return '보';
        }
    };

    const verseFn = (name, img) => {
        if (name - img === -1 || name - img === 2) {
            return '승리!';
        }
        if (name === img) {
            return '무승부';
        }
        return '패배..';
    };

    const onSelect = e => {
        const { name } = e.target.dataset;
        const user = RPSnameFn(parseInt(name));
        const ai = RPSnameFn(img);
        const result = verseFn(parseInt(name), img);

        setState(false);
        setPickPRS({
            user: user,
            ai: ai,
        });
        setResultText(result);
        setCheck(prev => prev + 1);
        result === '승리!' && setSettle(prev => ({ ...prev, win: prev.win + 1 }));
        result === '무승부' && setSettle(prev => ({ ...prev, draw: prev.draw + 1 }));
    };

    const onStart = () => {
        if (round < 10) {
            setState(true);
            setRound(prev => prev + 1);
        } else {
            setAlert(true);
        }
    };

    const closeAlert = () => {
        setState(true);
        setRound(1);
        setCheck(1);
        setImg(1);
        setPickPRS({
            user: '',
            ai: '',
        });
        setResultText('');
        setSettle({
            win: 0,
            draw: 0,
        });
        setAlert(false);
    };

    useEffect(() => {
        let num = 1;
        let time;
        if (state) {
            time = setInterval(() => {
                if (num <= 2) {
                    num++;
                    setImg(prev => prev + 1);
                } else if (num === 3) {
                    num = 1;
                    setImg(1);
                }
            }, 50);
        }
        return () => clearInterval(time);
    }, [state]);

    return (
        <div className="RPS_body">
            <div className="RPS_header">
                <span className="RPS_title">가위바위보 게임</span>
                <span className="RPS_score">
                    {circle.map((cir, i) => (
                        <ResultCicle key={i} cir={cir} round={round} check={check} resultText={resultText} />
                    ))}
                </span>
            </div>
            <div className="RPS_wrap">
                <div className="RPS_round">{round}라운드</div>
                <div className={`RPS_img imgName${img}`}></div>
                {state ? <RPSButton onSelect={onSelect} /> : <Restart onStart={onStart} />}
                {!state && <RPSResult pickRPS={pickRPS} resultText={resultText} />}
            </div>
            {alert && <AlertResult closeAlert={closeAlert} settle={settle} />}
        </div>
    );
};

export default RPS;
