import React from 'react'
import Img from '../images/cook.png'
export default function Result() {
    return (
        <div className="result">
            <h1>Hello Welcome!</h1>
            <img src={Img} width="250px" alt='chef-img'/>
            <p>Lets cook together :)</p>
        </div>
    );
}