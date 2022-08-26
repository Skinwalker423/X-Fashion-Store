import { SpinnerContainer } from "./spinner-style";

export type SpinnerProps = {
    title?: string;
}

const Spinner = ({title}: SpinnerProps) => {
    return (
        <SpinnerContainer>
            <div className="ui active massive centered inline loader">{title}</div>
        </SpinnerContainer>
    )
}

export default Spinner;