import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchCategoryList = async () => {
    const categoryResult = await axios
        .get('https://raw.githubusercontent.com/UrbanLT-Dev/apartmoa_FE/mbn/src/dummy/sample.json?token=GHSAT0AAAAAAB6JP7RVIIHIKK6JONU3MKNOZEJGW3A')
        .then(response => response.data);

    return categoryResult;
};

const CategoryInit = () => {
    let initData = {};

    //서치 카테고리 호출 api
    const data = useQuery('category', fetchCategoryList, {
        refetchOnWindowFocus: false,
        retry: 2,
    });

    const { isLoading, isSuccess } = data;

    if (isSuccess) {
        initData = {
            situation: data.data[0].grp_group_list[0],
            proprietor: data.data[1].grp_group_list[0],
            headOfHousehold: data.data[2].grp_group_list[0],
            id: { code_value: '' },
            name: { code_value: '' },
            Class: data.data[3].grp_group_list[0],
            dong: { code_value: '' },
            ho: { code_value: '' },
            phoneNum: { code_value: '' },
            registrationDate: { code_value: ['', ''] },
        };
    }

    // console.log(initData);

    return initData;
};

const ApiText = () => {
    return (
        <>
            {/* {isLoading && <div>로딩중</div>} */}
            {<div>{JSON.stringify(CategoryInit())}</div>}
        </>
    );
};

export default ApiText;
