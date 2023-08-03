import React from "react";
import axios from 'axios';


const FileDisplay = () => {

    function handleClick() {
        console.log('clicked')
        axios.get('/api')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
    }

    
    


    return (
       <div>
        <button onClick={handleClick} >Click to get audio</button>
       </div>
    )
}

export default FileDisplay;