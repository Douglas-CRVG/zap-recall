import "../front/front.css";
import turn from "../../../../assets/turn.png"

export default function Front(){
    return (
        <div class="front-face face">
            <div className="title">
                <p></p>
                <span>1/10</span>
            </div>
            <p className="content">
                O que é JSX?
            </p>
            <div className="buttons">
                <img src={turn} alt="return"/>
            </div>
        </div>
    );
}