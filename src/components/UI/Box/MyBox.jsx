import React from 'react'
import cl from './MyBox.module.css'

const MyBox = ({ children, ...props }) => {
    return (
        <div {...props} className={cl.MyBox}>
            {children}
        </div>
    )
}

export default MyBox