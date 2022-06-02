import styled, {css} from "styled-components";

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabel = css`
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
`

export const Group = styled.section`
    position: relative;
    margin: 45px 0;
    
    input[type='password'] {
        letter-spacing: 0.3em;
    }
`
export const FormInputLabel = styled.label`
        color: ${subColor};
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 300ms ease all;

        ${({shrink}) => shrink && shrinkLabel};

        &:focus {
            outline: none;
        }

        &:focus~ {
            ${shrinkLabel};
        }

`

export const FormInputStyle = styled.input`
        background: none;
        background-color: white;
        color: ${subColor};
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid ${subColor};
        margin: 25px 0;

        &:focus {
            outline: none;
        }

        &:focus ~ ${FormInputLabel}{
            ${shrinkLabel}
        }

    }

`


// .group {
//     position: relative;
//     margin: 45px 0;

//     .form-input {
//         background: none;
//         background-color: white;
//         color: grey;
//         font-size: 18px;
//         padding: 10px 10px 10px 5px;
//         display: block;
//         width: 100%;
//         border: none;
//         border-radius: 0;
//         border-bottom: 1px solid grey;;
//         margin: 25px 0;

//         &:focus {
//             outline: none;
//         }

//         &:focus~.form-input-label {
//                  top: -14px;
//                  font-size: 12px;
//                  color: black;
//         }
//     }

//     input[type='password'] {
//         letter-spacing: 0.3em;
//     }




export const Shrink = styled(FormInputLabel)`
        ${shrinkLabel};
`

//     .form-input-label {
//         color: grey;;
//         font-size: 16px;
//         font-weight: normal;
//         position: absolute;
//         pointer-events: none;
//         left: 5px;
//         top: 10px;
//         transition: 300ms ease all;

//         &.shrink {
//                  top: -14px;
//                  font-size: 12px;
//                  color: black;
//         }
//     }
// }