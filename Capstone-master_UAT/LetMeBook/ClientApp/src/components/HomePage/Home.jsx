import React, { Component } from 'react';
import './Home.css';
import img from './Group.svg'

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <body>
                <div class ="message">
                    <h1>Take care of yours & family's health.</h1>
                    <p class="msg">All in one destination for all type of clinic appointments.</p>
                    <p class="msg2">Consult 10,000+ health workers about your concerns.</p>
                    <div class="btn">
                        <a href="/doctors"><button>Book An Appoinment</button></a>
                    </div>

                    <div class="group"><img  src={img} alt='img' style={{width:" 500px"}}/></div>
                
               
                
                </div>
                
            </body>
        );
    }
}
