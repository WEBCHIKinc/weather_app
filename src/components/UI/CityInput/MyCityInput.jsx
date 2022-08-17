import React from 'react'
import classes from './MyCityInput.module.css'

const MyCityInput = ({ infoPage, ...props }) => {

    const rootClasses = [classes.input__town]

    if (infoPage) {
        rootClasses.push(classes.on__info)
    }

    return (
        <input {...props} className={rootClasses.join(' ')} />
    )
}

export default MyCityInput