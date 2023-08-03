import React from "react";
import { useState } from "react";
import axios from 'axios';
import RenderAudio from './RenderAudio.jsx';


const GetAudio = () => {

    const [filesForDisplay, setFiles] = useState([]);
    
    function handleClick() {

        console.log('clicked')
        axios.get('/api')
        // .then((res) => res.json())
        .then((res) => {
          // console.log(res.data)
          setFiles(res.data)
        })
        .catch((err) => {
          console.log(err);
        })   
    }

    const filesArray = []
    filesForDisplay.map((file, i) => {
      filesArray.push(<RenderAudio className="audioFile" path={file.path} key={i} file={file} />)
    })

    // console.log(filesToDisplay)
    
    return (
       <div>
        <button onClick={handleClick} >Click to get audio</button>
        {filesArray}
       </div>
    )
}

export default GetAudio;