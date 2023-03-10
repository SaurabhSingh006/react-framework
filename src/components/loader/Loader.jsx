import React from 'react'
import './loader.css';

function renderLoader({ type }) {
    let loader;
    switch(type) {
        case 'normal':
            loader = (
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
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

function Loader({ type = "normal", backgroundColor = "white", display = '', size = 100 }) {
  return (
    <div className={`container ${display}`} style={{ backgroundColor: `${backgroundColor}`, width: `${size}px`, height: `${size}px` }}>
        { renderLoader({ type }) }
    </div> 
  )
}

export default Loader