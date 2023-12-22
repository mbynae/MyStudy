import { createStoreImpl as create } from './vanilla.js';

export const store = create(set => ({
    text: '',
    count: 0,
    setCount: newCount => set({ count: newCount }),
    increment: () => set(state => ({ count: state.count + 1 })),
    setText: text => set({ text }),
}));

store.subscribe(state => console.log("somthing's changed ", state));
// store.subscribe(
//     state => console.log('Count is changed: ', count),
//     state => state.count
// ); // count 값이 바뀔 때만 로그가 출력됨
// store.subscribe(
//     state => console.log('Text has been changed: ', text),
//     state => state.text
// ); // text 값이 바뀔 때만 로그가 출력됨
