import React from 'react';

const MainContainer = () => {

    const handleClick = () => {
        const test = 'test';
        fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ test: test }),
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
          .catch(err => console.log)
    }


    return (
        <div>
            <h1 className="header">You are here! Welcome here.</h1>
            <button onClick={() => handleClick()}>
                Click Me
            </button>
        </div> 
    );
}

export default MainContainer;