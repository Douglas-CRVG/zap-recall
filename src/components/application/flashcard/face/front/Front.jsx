import "../front/front.css";
import Buttons from "../buttons/Buttons";

export default function Front(props) {
    const {
        setClassName
    } = props;

    return (
        <div className={`front-face face`}>
            <div className="title">
                <p></p>
                <span>1/10</span>
            </div>
            <p className="content">
                O que é JSX?
            </p>
            <Buttons button="button2" functionExec={() => setClassName("response")} />
        </div>
    );
}