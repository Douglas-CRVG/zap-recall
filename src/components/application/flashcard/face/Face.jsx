import "../face/face.css";
import Front from "./front/Front";
import Back from "./back/Back";

export default function Face(props){
    const {
        setClassName,
        setColor,
        setButton,
        button
    } = props;

    

    function result(color, button){
        setColor(color);
        setButton("button2");
    }

    return(
        <>
            <Front setClassName={setClassName} question = {flashcards[contador].question} key={contador} />
            <Back button={button} result={result}/>
        </>
    );
}