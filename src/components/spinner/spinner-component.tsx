import './spinner-style.scss';

export type SpinnerProps = {
    title?: string;
}

const Spinner = ({title}: SpinnerProps) => {
    return (
        <div id='spinner'>
            <div className="ui active massive centered inline loader">{title}</div>
        </div>
    )
}

export default Spinner;