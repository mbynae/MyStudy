import { create } from 'zustand'; //zustand에서 create를 호출

//create로 useStore를 생성한다.
//create 메서드는 자동으로 set 함수를 인자로 받음
//set 함수는 자동으로  state 객체를 인자로 받음
export const useStore = create(set => ({
    count: 0,
    increaseCount: () => set(state => ({ count: state.count + 1 })),
    removeAllCount: () => set({ count: 0 }),
}));
