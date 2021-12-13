import { useState } from "react"
import "../application/application.css"
import Finish from "./finish/Finish";
import Flashcard from "./flashcard/Flashcard"
import Header from "./header/Header"

export default function Application({dataFlashcards, restart, zaps}){
    const [className, setClassName] = useState("");
    const [color, setColor] = useState("");
    const [button, setButton] = useState("");
    const [count, setCount] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [zap, setZap] = useState(0);

    const {
        flashcards,
        id,
        title
    } = dataFlashcards;

    function nextFlashcard(){
        setClassName("");
        setColor("");
        setButton("");
        setCount(count + 1);
    }

    function reset(index){
        setClassName("");
        setColor("");
        setButton("");
        setCount(0);
        setIncorrect(0)
        restart(index);
    }

    return(
        <>
            <Header />
            {count !== flashcards.length? <h1>{title}</h1> : ""}
            {count === flashcards.length?
            <Finish
                incorrect={incorrect}
                id={id}
                restart={reset}
                zaps={zaps}
                zap={zap}
            />
            :
            <Flashcard
                setZap={setZap}
                zap={zap}
                setClassName={setClassName}
                className={className}
                setColor={setColor}
                color={color}
                setButton={setButton}
                button={button}
                flashcard={flashcards[count]}
                setCount={setCount}
                count={count}
                total={flashcards.length}
                functionExc={nextFlashcard}
                setIncorrect={setIncorrect}
                incorrect={incorrect}
            />}
        </>
    )
}