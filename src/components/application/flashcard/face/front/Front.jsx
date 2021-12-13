import "../front/front.css";
import Buttons from "../buttons/Buttons";

export default function Front(props) {
    const {
        setClassName,
        question,
        count,
        total
    } = props;

    //setClassName={setClassName} question = {flashcard.question} count={count} total={total}

    return (
        <div className={`front-face face`}>
            <div className="title">
                <p></p>
                <span>{`${count + 1}/${total}`}</span>
            </div>
            <p className="content">
                {question}
            </p>
            <Buttons button="button2" functionExec={() => setClassName("response")} />
        </div>
    );
}