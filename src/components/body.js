import React from 'react';
import Chef from "../images/chef.png"

export default function Body() {
    return (
        <div className="body">
            <section className="quote-body">
                <h1 className="quote"><span className="quote1">Make Your</span><span className="quote2">Delicious Food</span> <span className="quote1">With Us</span></h1>
            </section>
            <section className="image">
                <img className="chef" src={Chef} alt="chef"/>
            </section>
            <section className="yummy">
                <h1>Yummy:)</h1>
            </section>
        </div>
    )
}