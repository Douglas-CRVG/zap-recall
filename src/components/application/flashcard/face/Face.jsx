import "../face/face.css";
import Front from "./front/Front";
import Back from "./back/Back";

export default function Face(props){
    const {
        setClassName,
        setColor,
        setButton,
        button,
        flashcard,
        count,
        total,
        functionExc,
        setIncorrect,
        incorrect,
        setZap,
        zap
    } = props;   

    function result(color){
        if(color==="red"){
            setIncorrect(incorrect + 1);
        } else if(color==="yellow") {
            setZap(zap + 1);
        }
        setColor(color);
        setButton("button2");
    }

    return(
        <>
            <Front setClassName={setClassName} question = {flashcard.question} count={count} total={total} />
            <Back button={button} result={result} flashcard={flashcard} count={count} total={total} functionExc={functionExc} />
        </>
    );
}