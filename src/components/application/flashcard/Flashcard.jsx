import { useState } from "react";
import "../flashcard/flashcard.css"
import Face from "./face/Face";

export default function Flashcard() {
    const [className, setClassName] = useState("");
    const [color, setColor] = useState("");
    const [button, setButton] = useState("");
    const [count, setCount] = useState(0);
    
    const flashcards = [
        {
            question: "Pergunta 1?",
            response: "Resposta 1!"
        },
        {
            question: "Pergunta 2?",
            response: "Resposta 2!"
        },
        {
            question: "Pergunta 3?",
            response: "Resposta 3!"
        },
        {
            question: "Pergunta 4?",
            response: "Resposta 4!"
        },
        {
            question: "Pergunta 5?",
            response: "Resposta 5!"
        }
    ];

    function nextFlashcard(){
        setClassName("");
        setColor("");
        setButton("");
        setCount(count + 1);
    }

    return (
        <div className={`card ${className} ${color}`}>
            <Face setClassName={setClassName} setColor={setColor} setButton={setButton} button={button} flashcard={flashcards[count]} setCount={setCount} count={count} total={flashcards.length} functionExc={nextFlashcard}/>
        </div>
    );
}