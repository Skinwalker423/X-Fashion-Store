import React from "react";
import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from "./button-styles";
import { FC, ButtonHTMLAttributes} from "react";


export enum BUTTON_THEME {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted'
}

const getButton = (buttonType = BUTTON_THEME.base): typeof BaseButton => (
    {
        [BUTTON_THEME.base] : BaseButton,
        [BUTTON_THEME.google] : GoogleSignInButton,
        [BUTTON_THEME.inverted] : InvertedButton

    }[buttonType]
)

export type ButtonProps = {
    title?: string;
    theme?: BUTTON_THEME;
    isLoading?: boolean;
    
} & ButtonHTMLAttributes<HTMLButtonElement>



const Button: FC<ButtonProps> = ({children, theme, title, isLoading, ...otherProps}) => {

    const CustomButton = getButton(theme);

    return (
        <CustomButton disabled={isLoading} {...otherProps}>{isLoading ? <ButtonSpinner /> : children }{title}</CustomButton>
    )
}

export default Button;