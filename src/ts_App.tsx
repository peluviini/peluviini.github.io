import React, { useState } from 'react';

import OverlayScreen, { IOverlay, useOverlay, defaultOverlayValue } from './ts_OverlayScreen';
import MainScreen from "./ts_MainScreen";

const App : React.FC = () => {
  const [overlay, setOverlay] = useState<IOverlay>(defaultOverlayValue);
  const [indicatedAct, setIndicatedAct] = useState<Function>(() => {});

  return (
    <div id='AppScreen'
      style={{width : "100%", height : "100%", overflow : "hidden", position : "relative"}}
    >
      <useOverlay.Provider value={overlay} >
        <MainScreen indicatedAct={indicatedAct} />
      </useOverlay.Provider>
      <OverlayScreen
        overlaySetter={setOverlay}
        setIndicatedAct={setIndicatedAct}
      />
    </div>
    
  )
}

export default App;
