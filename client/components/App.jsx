import React from 'react';
import MainContainer from './MainContainer.jsx';
import DragAndDrop from './DragAndDrop.jsx';
import FileDisplay from './FileDisplay.jsx';

const App = () => {
    return(
        <div>
            <MainContainer />
            <DragAndDrop />
            <FileDisplay />
        </div>
    );
}

export default App;