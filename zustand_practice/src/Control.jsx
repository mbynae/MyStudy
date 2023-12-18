import { useStore } from './store'; // store에서 useStore를 호출

export default function Control() {
    // useStore에서 사용할 state와 메서드를 호출한다.
    const count = useStore(state => state.count);
    const countControl = useStore(state => state.increaseCount);
    const resetCount = useStore(state => state.removeAllCount);
    // 구조분해할당으로도 사용할 수 있다.
    // const { count, increaseCount: countControl, removeAllCount: resetCount } = useStore(state => state);

    return (
        <>
            <div className="card">
                <button onClick={countControl}>count is {count}</button>
                <p>클릭 시 카운트 증가</p>
            </div>
            <p className="read-the-docs">zustand 사용 테스트</p>
            <button onClick={resetCount}>리셋 버튼</button>
        </>
    );
}
