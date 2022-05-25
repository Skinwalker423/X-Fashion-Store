import React from "react";
import './button-styles.scss';

const BUTTON_THEME = {
    google: 'google-sign-in',
    inverted: 'inverted'
}


const Button = ({title, theme}) => {
    return (
        <button className={`button-container ${BUTTON_THEME[theme]}`}>{title}</button>
    )
}

export default Button;