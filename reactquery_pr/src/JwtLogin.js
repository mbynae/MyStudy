import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const JwtLogin = () => {
    const [text, setText] = useState({
        email: '',
        password: '',
    });
    const { email, password } = text;
    const queryClient = useQueryClient();
    const access_token = localStorage.getItem('access');
    const refresh_token = localStorage.getItem('refresh');
    const check_token = localStorage.getItem('check');

    const fetchTooList = async () => {
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

    const {
        mutate: login,
        isLoading,
        isError,
        error,
        data,
    } = useMutation('todos', fetchTooList, {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: data => {
            console.log(data);
            localStorage.setItem('access', data.data.tokeninfo.access_token);
            localStorage.setItem('refresh', data.data.tokeninfo.refresh_token);
            localStorage.setItem('check', true);
            sessionStorage.setItem('access', data.data.tokeninfo.access_token);
            sessionStorage.setItem('refresh', data.data.tokeninfo.refresh_token);
            // If the login is successful, invalidate the todos query to force it to refetch
            queryClient.invalidateQueries();
            queryClient.invalidateQueries('todos');
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
    };

    useEffect(() => {
        if (check_token) {
            sessionStorage.setItem('access', access_token);
            sessionStorage.setItem('refresh', refresh_token);
        }
    }, [check_token]);

    // window.addEventListener('beforeunload', function (event) {
    //     localStorage.removeItem('access');
    //     localStorage.removeItem('refresh');
    // });

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>
                    <h5>로그인해주세요</h5>
                    <input type="email" name="email" value={email} placeholder="아이디" required onChange={onChange} />
                    <input type="password" name="password" value={password} placeholder="비밀번호" required onChange={onChange} />
                    <button>제출</button>
                </label>
            </form>

            {isLoading && <span>Loading...</span>}
            {isError && <span>Error: {error.message}</span>}
            {/* {token.status === 200 ? (
                <>
                    <div>access_token : {token.access}</div>
                    <div>refresh_token : {token.refresh}</div>
                </>
            ) : null} */}
            {
                <>
                    <div>access_token : {sessionStorage.getItem('access')}</div>
                    <div>refresh_token : {sessionStorage.getItem('refresh')}</div>
                </>
            }
        </>
    );
};

export default JwtLogin;
