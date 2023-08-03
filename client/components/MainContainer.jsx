import React from 'react';
import DragAndDrop from './DragAndDrop.jsx';

const MainContainer = () => {

    const handleChange = () => {
        
    }

    return (
        <div >
            <h1 className="header">Sample Selector</h1>
            <form>
                <label>
                    Name:
                 <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div className="MainContainer">Show this test</div>
        </div> 
    );
}

export default MainContainer;