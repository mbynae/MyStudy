import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';

const LoginForm = ({ email, password, onSubmit, onChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <label>
                <h5>로그인해주세요</h5>
                <input type="email" name="email" value={email} placeholder="아이디" required onChange={onChange} />
                <input type="password" name="password" value={password} placeholder="비밀번호" required onChange={onChange} />
                <button>제출</button>
            </label>
        </form>
    );
};

const LoginSuccess = ({ userId, onClick }) => {
    return (
        <>
            <div>환영합니다 {userId}님</div>
            <button onClick={onClick}>로그아웃</button>
        </>
    );
};

const JwtLogin = () => {
    const queryClient = useQueryClient();
    const access = localStorage.getItem('access');
    const refresh = localStorage.getItem('refresh');
    const check_token = localStorage.getItem('check');
    const userId = localStorage.getItem('userId');

    const [text, setText] = useState({
        email: '',
        password: '',
    });
    const [logIn, setLogIn] = useState(check_token);
    const [time, setTime] = useState(0);
    const { email, password } = text;
    const [stop, setStop] = useState(true);
    const decodedToken = logIn ? jwtDecode(access) : null;

    const fetchLogin = async () => {
        // axios으로 로그인 요청 (post)
        let res = await axios({
            method: 'POST',
            url: '/auth/api/v1/token/login',
            data: {
                login_id: email,
                login_pswd: password,
                login_type: 'BASIC',
            },
        });
        return res;
    };

    //리프레쉬 request
    const fetchRefresh = async () => {
        let res = await axios({
            method: 'POST',
            url: '/auth/api/v1/token/jwt',
            data: {
                refresh_token: refresh,
            },
        });
        return res;
    };

    const {
        mutate: login,
        isLoading,
        isError,
        error,
        data,
    } = useMutation('login', fetchLogin, {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: data => {
            console.log(data);
            setLogIn(true);
            localStorage.setItem('access', data.data.tokeninfo.access_token);
            localStorage.setItem('refresh', data.data.tokeninfo.refresh_token);
            localStorage.setItem('check', true);
            localStorage.setItem('userId', data?.config.data.split(',')[0].slice(13).replace(`"`, ''));
            localStorage.setItem('currentDate', Math.floor(Date.now() / 1000));
            setStop(false);

            // If the login is successful, invalidate the todos query to force it to refetch
            queryClient.invalidateQueries('login');
        },
        onError: e => {
            console.log(e.message);
        },
        enabled: false,
    });

    // Mutation for refresh
    const { mutate: refreshLogin, data: refreshData } = useMutation('refresh', fetchRefresh, {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: data => {
            console.log(data);
            localStorage.setItem('access', data.data.token_info.access_token);
        },
        onError: e => {
            console.log(e.message);
        },
        enabled: false,
    });

    const onChange = e => {
        const { name, value } = e.target;
        setText({
            ...text,
            [name]: value,
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        login();
        setText({
            email: '',
            password: '',
        });
    };

    const onClick = () => {
        logOut();
    };

    const logOut = () => {
        setLogIn(false);
        setTime(0);
        localStorage.clear();
    };

    //     if (isLoading || isError) {
    //         return isLoading ? <span>Loading...</span> : isError ? <span>{error}</span> : <LoginForm {...text} onSubmit={onSubmit} onChange={onChange} />;
    // console.log(decodedToken?.exp, Math.floor(Date.now() / 1000));
    useEffect(() => {
        let timer =
            logIn &&
            setTimeout(() => {
                setTime(prev => prev + 1);
                // 임시 적용 코드
                // if (Math.floor(Date.now() / 1000) > Number(localStorage.getItem('currentDate')) + 60) {
                //     logOut();
                // }
                // //리프레쉬 아직 미구현

                if (Math.floor(Date.now() / 1000) > Number(localStorage.getItem('currentDate')) + 5 && !stop) {
                    refreshLogin();
                    setStop(true);
                }

                //실제 적용할 코드
                // if (Math.floor(Date.now() / 1000) > decodedToken?.exp) {
                //     logOut();
                // } else if (Math.floor(Date.now() / 1000) > decodedToken?.exp - 100) {
                //     refreshLogin();
                // }
            }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [{ logIn: true }]);

    //확인용 콘솔
    // console.log(time, Number(localStorage.getItem('currentDate')) + 5, Math.floor(Date.now() / 1000), decodedToken?.exp);
    console.log(time, decodedToken?.exp, Math.floor(Date.now() / 1000));

    return <>{check_token ? <LoginSuccess userId={userId} onClick={onClick} /> : <LoginForm {...text} onSubmit={onSubmit} onChange={onChange} />}</>;
};

export default JwtLogin;
