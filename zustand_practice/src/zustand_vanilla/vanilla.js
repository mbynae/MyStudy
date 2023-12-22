export function createStoreImpl(createState) {
    let state;

    const listeners = new Set();

    const setState = (partial, replace) => {
        const nextState = typeof partial === 'function' ? partial(state) : partial;
        if (nextState !== state) {
            const previousState = state;

            state = replace ? nextState : Object.assign({}, state, nextState);

            listeners.forEach(listener => listener(state, previousState));
        }
    };

    const getState = () => state;

    const subscribeWithSelector = (listener, selector = getState, equalityfn = Object.is) => {
        let currentSlice = selector(state);

        function listenerToAdd() {
            const nextSlice = selector(state);
            if (!equalityfn(currentSlice, nextSlice)) {
                const previousSlice = currentSlice;
                listener((currentSlice = nextSlice), previousSlice);
            }
        }

        listeners.add(listenerToAdd);
        return () => listeners.delete(listenerToAdd);
    };

    const subscribe = (listener, selector, equalityfn) => {
        if (selector || equalityfn) {
            return subscribeWithSelector(listener, selector, equalityfn);
        }

        listeners.add(listener);
        return () => listeners.delete(listener);
    };

    const destroy = () => listeners.clear();

    const api = { setState, getState, subscribe, destroy };

    state = createState(setState, getState, api);

    return api;
}

// export const createStore = createState => (createState ? createStoreImpl(createState) : createStoreImpl);
