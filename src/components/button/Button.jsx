import classNames from 'classnames';
import React from 'react';
import Loader from './../loader/Loader';

function Button({ classes = '', title = 'Add title', align = 'right', loading = false }) {
    const btnClassName = classNames(
        'px-2 py-1 rounded-xl m-w-fit',
        classes,
        { 'disabled:opacity-40 cursor-progress': loading },
    );

    const buttonInnerClasses = classNames(
        'grid items-center',
        { 'grid-cols-1': !loading },
        { 'grid-cols-2': loading }
    );  

    const loaderClasses = classNames(
        'grid place-items-center',
        { 'hidden': !loading }
    );
        

    return (
        <div style={{ textAlign: `${align}` }}>
            <button disabled={loading} className={btnClassName} >
            <div className={buttonInnerClasses} >
                <div>{ title }</div>
                <div className={loaderClasses} > <Loader type='bar' backgroundColor='transparent' size='20px' /> </div>
            </div>
            </button>
        </div>
    )
}

export default Button


// import classNames from 'classnames';
// import React from 'react';
// import Loader from './../loader/Loader';

// function Button({ classes = '', title = 'Add title', align = 'right', loading = false }) {
//     const className = classNames(
//         'px-2 py-1 rounded-xl text-lg',
//         classes,
//         // { 'disabled:opacity-50': loading }
//     );
        
//     const buttonInnerClasses = classNames(
//         'grid items-center',
//         { 'grid-cols-1': !loading },
//         { 'grid-cols-2': loading }
//     );   
//     const loaderClasses = classNames(
//         'grid place-items-center',
//         { 'hidden': !loading }
//     );

//     return (
//         <div style={{ textAlign: `${align}` }}>
//             <button disabled className={className} >
//                 <div className={buttonInnerClasses} >
//                     <div>{ title }</div>
//                     <div className={loaderClasses} > <Loader type='bar' backgroundColor='transparent' size='20px' /> </div>
//                 </div>
//             </button>
//         </div>
//     )
// }

// export default Button