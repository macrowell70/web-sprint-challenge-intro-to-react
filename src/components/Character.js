// Write your Character component here
import React, { useState } from "react";
import styled from 'styled-components';

const StyledCharacter = styled.div`
    width: 80%;
    padding: 20px;
    text-align: left;
    color: #e8d9f7;
    background-color: black;
    margin: auto;
    border-radius: 15px;
    border-bottom: 2px solid #e8d9f7;
`;


const Character = props => {
    return (
        <StyledCharacter className='character'>
            <h2>{props.info.name}</h2>
        </StyledCharacter>
    )
};

export default Character
