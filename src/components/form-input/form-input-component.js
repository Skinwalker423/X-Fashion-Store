import React from "react";
import './form-input-styles.scss';

const FormInput = ({label, ...otherProps }) => {

    
    return(
        <section className="group">
            <input className="form-input" {...otherProps} autoComplete='true' />
            {label && <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} htmlFor={otherProps.name}>{label}</label>}
        </section>
    )
}

export default FormInput;