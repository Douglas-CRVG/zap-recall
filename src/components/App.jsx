import { useState } from "react";
import "./css/reset.css";
import "./css/styles.css"
import Home from "./home/Home";
import Application from "./application/Application";

export default function App() {
    const [appScreen, setAppScreen] = useState("Home");
    const [flashcard, setFlashcard] = useState({})
    const [zaps, setZaps] = useState("");

    const  data = [
        {
            id: 0,
            title: "Praticar React",
            flashcards: [
                {
                    question: "O que é JSX?",
                    response: "Uma extensão de linguagem do JavaScript"
                },
                {
                    question: "O React é:",
                    response: "uma biblioteca JavaScript para construção de interfaces"
                },
                {
                    question: "Componentes devem iniciar com:",
                    response: "letra maiúscula"
                },
                {
                    question: "Podemos colocar __ dentro do JSX ",
                    response: "expressões"
                },
                {
                    question: "O ReactDOM nos ajuda:",
                    response: " interagindo com a DOM para colocar componentes React na mesma"
                },
                {
                    question: "Usamos o npm para:",
                    response: "gerenciar os pacotes necessários e suas dependências"
                },
                {
                    question: "Usamos props para:",
                    response: "passar diferentes informações para componentes"
                },
                {
                    question: "Usamos estado (state) para:",
                    response: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
                }
            ]
        },
        {
            id: 1,
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
        }
    ];

    function startRecall(index){
        if((zaps%1===0) && (zaps >= 1) && (zaps <= data[index].flashcards.length)){
            setAppScreen("Application");
            setFlashcard(data[index]);
        } else {
            setZaps("")
            alert("Insira uma meta válida!");
        }
    }

    return (
        <>
            {appScreen === "Home"? <Home startRecall={startRecall} data={data} setZaps={setZaps} zaps={zaps} /> : <Application restart={startRecall} dataFlashcards={flashcard} zaps={zaps}/>}
        </>
    );
}