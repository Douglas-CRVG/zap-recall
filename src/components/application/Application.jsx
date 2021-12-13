import { useState } from "react"
import "../application/application.css"
import Finish from "./finish/Finish";
import Flashcard from "./flashcard/Flashcard"
import Header from "./header/Header"

export default function Application({dataFlashcards}){
    const [className, setClassName] = useState("");
    const [color, setColor] = useState("");
    const [button, setButton] = useState("");
    const [count, setCount] = useState(0);
    const [incorrect, setIncorrect] = useState(0);

    const {
        flashcards,
        id
    } = dataFlashcards;

    function nextFlashcard(){
        setClassName("");
        setColor("");
        setButton("");
        setCount(count + 1);
    }

    return(
        <>
            <Header />
            {count === flashcards.length? <Finish incorrect={incorrect} id={id} /> : <Flashcard setClassName={setClassName} className={className} setColor={setColor} color={color} setButton={setButton} button={button} flashcard={flashcards[count]} setCount={setCount} count={count} total={flashcards.length} functionExc={nextFlashcard} setIncorrect={setIncorrect} incorrect={incorrect} />}
        </>
    )
}