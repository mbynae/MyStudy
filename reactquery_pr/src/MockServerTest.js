import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const MockServerTest = () => {
    const queryClient = useQueryClient();

    const fetchLogin = async () => {
        // axios으로 로그인 요청 (post)
        let res = await axios({
            method: 'GET',
            url: 'https://7ca52823-d89e-4fb8-b0fc-6d718140d735.mock.pstmn.io/list',
            // headers: {
            //     age: 20,
            //     name: 'User',
            // },
        });
        return res;
    };

    const { isLoading, isError, error, data } = useQuery('login', fetchLogin, {
        refetchOnWindowFocus: false,
        retry: 1,
        onSuccess: data => {
            console.log(data);

            // If the login is successful, invalidate the todos query to force it to refetch
            // queryClient.invalidateQueries('login');
        },
        onError: e => {
            console.log(e.message);
        },
        // enabled: false,
    });

    return (
        <>
            <div>목업 서버 테스트</div>
        </>
    );
};

export default MockServerTest;
