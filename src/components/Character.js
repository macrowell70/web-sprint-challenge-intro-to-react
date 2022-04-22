// Write your Character component here
import React, { useState } from "react";


const Character = props => {
    return (
        <div className='character'>
            <h2>{props.info.name}</h2>
        </div>
    )
};

export default Character
