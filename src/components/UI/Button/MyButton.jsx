import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({ infoPage, current, children, ...props }) => {
    const rootClasses = [classes.button]

    if (infoPage) {
        rootClasses.push(classes.onInfo)
    }
    if (current) {
        rootClasses.push(classes.current)
    }

    return (
        <button className={rootClasses.join(' ')} {...props}>
            {children}
        </button>
    )
}

export default MyButton