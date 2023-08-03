import React from 'react';
import MainContainer from './MainContainer.jsx';
import DragAndDrop from './DragAndDrop.jsx';
import GetAudio from './GetAudio.jsx';
import RenderAudio from './RenderAudio.jsx';

const App = () => {
    return(
        <div>
            <MainContainer />
            <DragAndDrop />
            <GetAudio />
            <RenderAudio />
        </div>
    );
}

export default App;