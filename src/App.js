import React from 'react';

import TrackList from './app/music-player/components/TrackList.js';
import PlayerControls from './app/music-player/components/PlayerControls.js';
import { MusicPlayerProvider } from './app/music-player/MusicPlayerContext.js';

function App() {
  return (
    <MusicPlayerProvider>
      <div className='container'>
        <TrackList/>
        <PlayerControls/>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
