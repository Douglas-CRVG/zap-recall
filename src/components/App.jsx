import { useState } from "react";
import "./css/reset.css";
import "./css/styles.css"
import Home from "./home/Home";
import Application from "./application/Application";

export default function App() {
    const [appScreen, setAppScreen] = useState("Home");
    const [flashcard, setFlashcard] = useState({})

    const  data = [
        {
            id: 0,
            title: "Testando mais de um flashcard",
            flashcards: [
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
            ]
        },
        {
            id: 1,
            title: "Test2",
            flashcards: [
                {
                    question: "É o teste 2 mermo Pergunta 1?",
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
                },
                {
                    question: "Pergunta 5?",
                    response: "Resposta 5!"
                }
            ]
        }
    ];

    function startRecall(index){
        setAppScreen("Application");
        setFlashcard(data[index]);
    }

    return (
        <>
            {appScreen === "Home"? <Home startRecall={startRecall} data={data}/> : <Application dataFlashcards={flashcard}/>}
        </>
    );
}