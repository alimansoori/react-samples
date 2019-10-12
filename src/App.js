import React from 'react';

import TrackList from './app/music-player/components/TrackList';
import { MusicPlayerProvider } from './app/music-player/MusicPlayerContext';

function App() {
  return (
    <MusicPlayerProvider>
      <div className='container'>
        <TrackList/>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
