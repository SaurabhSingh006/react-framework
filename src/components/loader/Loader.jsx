/*
# CONFIGURABLE PROPS

1 backgroundColor="black"
2 size='50px'
3 loaderWeight='5px'
4 type='normal' => normal,dotted
5 color='red'

*/

import React from 'react'
import './loader.css';

function Loader({ type = "normal", backgroundColor = "black", size = '30px', color = 'black', loaderWeight = '50px' }) {
    let loader;
    switch(type) {
        case 'normal':
            loader = (
                <div style={{ width: `${size}`, height: `${size}` }} className={`lds-ring bg-${backgroundColor}`} >
                    <div style={{ borderColor: `${color} transparent transparent transparent`, borderWidth: `${loaderWeight}`,  }}></div>
                    <div style={{ borderColor: `${color} transparent transparent transparent`, borderWidth: `${loaderWeight}` }}></div>
                    <div style={{ borderColor: `${color} transparent transparent transparent`, borderWidth: `${loaderWeight}` }}></div>
                    <div style={{ borderColor: `${color} transparent transparent transparent`, borderWidth: `${loaderWeight}` }}></div>
                </div>
            );
            break;

        case "dotted":
            loader = (
                <div class="dot-spinner">
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                </div>
            );
            break;
        
        case "bar":
            loader = (
                <div class="loader">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                    <div class="bar4"></div>
                    <div class="bar5"></div>
                    <div class="bar6"></div>
                    <div class="bar7"></div>
                    <div class="bar8"></div>
                    <div class="bar9"></div>
                    <div class="bar10"></div>
                    <div class="bar11"></div>
                    <div class="bar12"></div>
                </div>
            );
            break;
            
        default: 
            loader = "Loading...."
    }
    return loader;
}

export default Loader