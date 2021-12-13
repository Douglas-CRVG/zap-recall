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
        incorrect,
        setZap,
        zap
    } = props;

    return (
        <div className={`flashcard ${className} ${color}`} data-identifier="flashcard">
            <Face setClassName={setClassName} setColor={setColor} setButton={setButton} button={button} flashcard={flashcard} setCount={setCount} count={count} total={total} functionExc={functionExc} setIncorrect={setIncorrect} incorrect={incorrect} setZap={setZap} zap={zap}/>
        </div>
    );
}