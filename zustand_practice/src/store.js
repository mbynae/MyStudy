import { useLayoutEffect, useReducer, useRef } from 'react';
import { create as createImpl } from './vanilla';

export function createStoreHook(createState) {
    const api = typeof createState === 'function' ? createImpl(createState) : createState;

    const useStore = (selector = api.getState, equalityFn = Object.is) => {
        //const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
        const [, forceUpdate] = useReducer(c => c + 1, 0);

        const state = api.getState();

        const stateRef = useRef(state);
        const selectorRef = useRef(selector);
        const equalityFnRef = useRef(equalityFn);
        const erroredRef = useRef(false);

        const currentSliceRef = useRef();
        if (currentSliceRef.current === undefined) {
            currentSliceRef.current = selector(state);
        }

        let newStateSlice = false;
        let hasNewStateSlice = false;

        if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {
            newStateSlice = selector(state);
            hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
        }

        useLayoutEffect(() => {
            if (hasNewStateSlice) {
                currentSliceRef.current = newStateSlice;
            }
            stateRef.current = state;
            selectorRef.current = selector;
            equalityFnRef.current = equalityFn;
            erroredRef.current = false;
        });

        const stateBeforeSubscriptionRef = useRef(state);
        useLayoutEffect(() => {
            const listener = () => {
                try {
                    const nextState = api.getState();
                    const nextStateSlice = selectorRef.current(nextState);

                    if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {
                        stateRef.current = nextState;
                        currentSliceRef.current = nextStateSlice;
                        forceUpdate();
                    }
                } catch (error) {
                    erroredRef.current = true;
                    forceUpdate();
                }
            };
            const unsubscribe = api.subscribe(listener);

            if (api.getState() !== stateBeforeSubscriptionRef.current) {
                listener();
            }

            return unsubscribe;
        }, []);

        return hasNewStateSlice ? newStateSlice : currentSliceRef.current;
    };

    Object.assign(useStore, api);

    return useStore;
}
