import "../back/back.css";
import Buttons from "../buttons/Buttons";


export default function Back(props) {
    const {
        result,
        button
    } = props;
    return (
        <div className="back-face face">
            <div className="title">
                <p>O que é JSX?</p>
                <span>1/10</span>
            </div>
            <p className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vel, neque officia ut culpa hic blanditiis nobis eligendi id, recusandae nesciunt cupiditate optio ad maxime accusantium adipisci. Minus, obcaecati quo?
            </p>
            <Buttons result={result} button={button} functionExec={result} />
        </div>
    );
}