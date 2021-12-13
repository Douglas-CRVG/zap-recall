import { useState } from "react"
import "../application/application.css"
import Flashcard from "./flashcard/Flashcard"
import Header from "./header/Header"

export default function Application(){
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

    return(
        <>
            <Header count={count}/>
            <Flashcard flashcard={flashcards[count]}/>
        </>
    )
}