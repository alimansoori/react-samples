import React, { useContext } from 'react';

import { MusicPlayerContext } from '../MusicPlayerContext';

const TrackList = () => {
    const [state, setState] = useContext(MusicPlayerContext);

    return (
        <button onClick={() => setState(state => ({ ...state, name: 'Clicked'}))}>
            {state.name ? state.name : 'Click Me!'}
        </button>
    );
};

export default TrackList;