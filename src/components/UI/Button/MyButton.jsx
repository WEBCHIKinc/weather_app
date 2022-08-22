import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({ infoPage, daily, children,current, ...props }) => {
    const rootClasses = [classes.button]

    if (infoPage) {
        rootClasses.push(classes.onInfo)
    }
    if (daily) {
        rootClasses.push(classes.daily)
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