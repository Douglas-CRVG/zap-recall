import "../back/back.css";
import Buttons from "../buttons/Buttons";


export default function Back(props) {
    const {
        result,
        button,
        flashcard,
        count,
        total,
        functionExc
    } = props;

    // button={button} result={result} response = {flashcard.response} total={total}

    return (
        <div className="back-face face">
            <div className="title">
                <p>{flashcard.question}</p>
                <span>{`${count + 1}/${total}`}</span>
            </div>
            <p className="content">
                {flashcard.response}
            </p>
            <Buttons result={result} button={button} functionExec={functionExc} />
        </div>
    );
}