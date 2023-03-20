import classNames from 'classnames';
import React from 'react';
import Loader from './../loader/Loader';

function Button({ classes = '', title = 'Add title', align = 'right' }) {
    const className = classNames(
        'px-2 py-1 rounded-xl m-w-fit',
        classes,
    );
        

    return (
        <div style={{ textAlign: `${align}` }}>
            <button className={className} >
                <div className='flex'>
                    { title }
                    <Loader type='bar' backgroundColor='transparent' size='20px' />
                </div>
            </button>
        </div>
    )
}

export default Button
