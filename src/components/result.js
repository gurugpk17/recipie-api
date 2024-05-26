import React from 'react'
import Img from '../images/cook.png'
export default function Result({value}) {
    return (
        <div className="result">
            <h1>Hello {value} Welcome!</h1>
            <img src={Img} width="250px"/>
            <p>Lets cook together {value} :)</p>
        </div>
    );
}