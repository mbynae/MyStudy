import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites', //슬라이스의 이름
    //초기 상태. 컨텍스트와 다르게 데이터와 데이터를 변경하는 함수를 분리해 놓음
    initialState: {
        ids: [],
    },
    //상태를 변경하는 함수가 들어감
    reducers: {
        //함수에는 최신 상태를 반영한 state가 매개변수로 들어감, 두번째 인자에는 동작 매개변수가 들어감
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id); //<--action은 추가될 데이터를 payload에 담음. 리덕스 툴킷은 immer 때문에 state 변경이 가능
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1); //<-- 리덕스 툴킷에서 배열의 일부 항목을 제거하는 방법
        },
    },
});

//동작 메서드를 export하는 방법
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer; //store와 통합하기 위해 reducer을 여기서 보내야 한다.
