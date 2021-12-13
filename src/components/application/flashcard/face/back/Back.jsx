import "../back/back.css";
import Buttons from "../buttons/Buttons";
import Content from "../content/Content";
import Title from "../title/Title";


export default function Back(props) {
    const {
        result,
        button,
        flashcard,
        count,
        total,
        functionExc
    } = props;

    return (
        <div className="back-face face">
            <Title question={flashcard.question} counter={`${count + 1}/${total}`} />
            <Content content={flashcard.response} />
            <Buttons result={result} button={button} functionExec={functionExc} />
        </div>
    );
}