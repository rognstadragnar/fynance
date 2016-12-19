import React from 'react';

export default ({children, classes = ''}) => {
    return (
        <div className={'card ' + classes}>{children}</div>
    )
}
