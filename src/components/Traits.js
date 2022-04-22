import React, { useState, useEffect } from "react";
import styled from 'styled-components';



const Traits = props => {
    const [traits, setTraits] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
        .then(res => setTraits(res.data.results))
        .catch(err => console.error(err))
    })

    return (
        <div>
            <p>This will hold character traits</p>
        </div>
    )

};

export default Traits;