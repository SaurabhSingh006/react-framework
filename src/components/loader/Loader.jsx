import React from 'react'
import './loader.css';

function renderLoader({ type, color }) {
    let loader;
    switch(type) {
        case 'normal':
            loader = (
                <div className="lds-ring">
                    <div style={{ borderColor: `${color} transparent transparent transparent` }}></div>
                    <div style={{ borderColor: `${color} transparent transparent transparent` }}></div>
                    <div style={{ borderColor: `${color} transparent transparent transparent` }}></div>
                    <div style={{ borderColor: `${color} transparent transparent transparent` }}></div>
                </div>
            );
            break;

        case "dotted":
            loader = (
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            );
            break;
        
        default: 
            loader = "Loading...."
    }
    return loader;
}

function Loader({ type = "normal", backgroundColor = "white", size = 100, color = 'black' }) {
  return (
    <div className={`container`} style={{ backgroundColor: `${backgroundColor}`, width: `${size}px`, height: `${size}px` }}>
        { renderLoader({ type, color }) }
    </div> 
  )
}

export default Loader