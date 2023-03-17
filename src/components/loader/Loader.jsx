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
                <div style={{ width: `${size}`, height: `${size}`, backgroundColor: `${backgroundColor}` }} className='lds-ring' >
                    <div style={{ borderColor: `${color} transparent transparent transparent`, borderWidth: `${loaderWeight}` }}></div>
                    <div style={{ borderColor: `${color} transparent transparent transparent`, borderWidth: `${loaderWeight}` }}></div>
                    <div style={{ borderColor: `${color} transparent transparent transparent`, borderWidth: `${loaderWeight}` }}></div>
                    <div style={{ borderColor: `${color} transparent transparent transparent`, borderWidth: `${loaderWeight}` }}></div>
                </div>
            );
            break;

        case "dotted":
            loader = (
                <div style={{ width: `${size}`, height: `${size}`, backgroundColor: `${backgroundColor}` }} className='dot-spinner' >
                    <div className={`dot-spinner__dot`}></div>
                    <div className={`dot-spinner__dot`}></div>
                    <div className={`dot-spinner__dot`}></div>
                    <div className={`dot-spinner__dot`}></div>
                    <div className={`dot-spinner__dot`}></div>
                    <div className={`dot-spinner__dot`}></div>
                    <div className={`dot-spinner__dot`}></div>
                    <div className={`dot-spinner__dot`}></div>
                </div>
            );
            break;
        
        case "bar":
            loader = (
                <div  style={{ maxWidth: `${size}`, height: `${size}`, backgroundColor: `${backgroundColor}` }} className="loader">
                    <div style={{ backgroundColor: `${color}` }} className="bar1"></div>
                    <div style={{ backgroundColor: `${color}` }} className="bar2"></div>
                    <div style={{ backgroundColor: `${color}` }} className="bar3"></div>
                    <div style={{ backgroundColor: `${color}` }} className="bar4"></div>
                    <div style={{ backgroundColor: `${color}` }} className="bar5"></div>
                    <div style={{ backgroundColor: `${color}` }} className="bar6"></div>
                    <div style={{ backgroundColor: `${color}` }} className="bar7"></div>
                    <div style={{ backgroundColor: `${color}` }} className="bar8"></div>
                    <div style={{ backgroundColor: `${color}` }} className="bar9"></div>
                    <div style={{ backgroundColor: `${color}` }} className="bar10"></div>
                    <div style={{ backgroundColor: `${color}` }} className="bar11"></div> 
                    <div style={{ backgroundColor: `${color}` }} className="bar12"></div>
                </div>
            );
            break;
            
        default: 
            loader = "Loading...."
    }
    return loader;
}

export default Loader