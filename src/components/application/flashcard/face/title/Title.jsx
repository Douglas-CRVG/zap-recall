export default function Title({
    question,
    counter
}) {
    return(
        <div className="title">
            <p>{question}</p>
            <span data-identifier="counter">{counter}</span>
        </div>
    );
}