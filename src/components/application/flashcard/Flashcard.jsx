import { useState } from "react";
import "../flashcard/flashcard.css"
import Face from "./face/Face";

export default function Flashcard() {
    const [className, setClassName] = useState("");
    const [color, setColor] = useState("");
    const [button, setButton] = useState("");

    return (
        <div className={`card ${className} ${color}`}>
            <Face setClassName={setClassName} setColor={setColor} setButton={setButton} button={button} />
        </div>
    );
}