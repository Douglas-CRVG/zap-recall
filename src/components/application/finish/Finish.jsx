import "../finish/finish.css";
import success from "../../assets/party.png";
import noSuccess from "../../assets/sad.png";
import ScreenFinish from "./ScreenFinish";

export default function Finish({incorrect, id, restart}){

    if(incorrect === 0){
        return(
            <ScreenFinish id={id} restart={restart} text="PARABÉNS!" img={success} description="Você não esqueceu de nenhum flashcard!"/>
        );
    } else {
        return(
            <ScreenFinish id={id} restart={restart} text="Putz.." img={noSuccess} description={`Você esqueceu ${incorrect} flashcard${incorrect>1? "s" : ""}.. Não desanime! Na próxima você consegue!`} />
        )
    }
}