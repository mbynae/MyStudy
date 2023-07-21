import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import BiDongGi from './BiDongGi';
import GuGUDan from './GuGUDan';
import WordGame from './WordGame';
import BullsAndCows from './BullsAndCows';
import ScrollSample from './ScrollSample';
import ScrollSample2 from './ScrollSample2';
import ReactionSpeedCheck from './ReactionSpeedCheck';
import RPS from './RPS';
import ApiText from './ApiText';
import CustomHookText from './CustomHookText';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactionSpeedCheck />
        </QueryClientProvider>
    );
}

export default App;
