import classNames from 'classnames';
import React from 'react'

function Button({ classes = '' }) {
    const className = classNames(
        'px-3 py-1 rounded-xl',
        classes,
    );
        

    return (
        <button className={className} >
            Button 
            <div class="lds-roller"><div></div><div></div><div></div><div></div> </div>
        </button>
    )
}

export default Button
