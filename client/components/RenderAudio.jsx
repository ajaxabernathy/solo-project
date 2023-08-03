import React from "react";



const RenderAudio = (props) => {
    

    console.log(props)

    
    return (
        <div> 
            <audio controls>
                <source src={props.path} type="audio/wav" />
            </audio>
        </div>
    )
}


export default RenderAudio;

