import "../flashcard/flashcard.css"
import Face from "./face/Face";

export default function Flashcard(props) {
    const {
        className,
        setClassName,
        color,
        setColor,
        button,
        setButton,
        count,
        setCount,
        flashcard,
        total,
        functionExc,
        setIncorrect,
        incorrect
    } = props;

    return (
        <div className={`card ${className} ${color}`}>
            <Face setClassName={setClassName} setColor={setColor} setButton={setButton} button={button} flashcard={flashcard} setCount={setCount} count={count} total={total} functionExc={functionExc} setIncorrect={setIncorrect} incorrect={incorrect} />
        </div>
    );
}