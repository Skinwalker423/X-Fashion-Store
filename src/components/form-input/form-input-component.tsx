import React, {FC, InputHTMLAttributes} from "react";
import { FormInputLabel, FormInputStyle, Group } from "./form-input-styles";

type FormInputProps = {
    label: string;

} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({label, ...otherProps }) => {
        return(
            <Group>
            <FormInputStyle {...otherProps} />
            <FormInputLabel shrink={Boolean(label && otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length )} htmlFor={otherProps.name}>{label}</FormInputLabel>
        </Group>
        )
}

export default FormInput;