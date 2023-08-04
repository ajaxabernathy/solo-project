import React from "react";



const RenderAudio = (props) => {
    

    console.log(props)

    
    return (
        <div> 
            <audio controls className="audioFile">
                <source src={props.path} type="audio/wav" />
            </audio>
        </div>
    )
}


export default RenderAudio;

