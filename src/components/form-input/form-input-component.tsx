import React, {FC, InputHTMLAttributes} from "react";
import { FormInputLabel, FormInputStyle, Group } from "./form-input-styles.jsx";

type FormInputProps = {
    label: string;

} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({label, ...otherProps }) => {

    if(otherProps.value){
        const hasInput = otherProps.value;
        
        return(
            <Group>
            <FormInputStyle {...otherProps} />
            <FormInputLabel shrink={Boolean(label && hasInput && typeof hasInput === 'string' && hasInput.length )} htmlFor={otherProps.name}>{label}</FormInputLabel>
        </Group>
        )
    }
}

export default FormInput;