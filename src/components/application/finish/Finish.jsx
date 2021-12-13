import "../finish/finish.css";
import success from "../../assets/party.png";
import noSuccess from "../../assets/sad.png";
import ScreenFinish from "./ScreenFinish";

export default function Finish(props) {
    const {
        incorrect,
        id,
        restart,
        zaps,
        zap
    } = props;
    console.log(zap)

    if(incorrect === 0 || zap >= zaps) {
        return(
            <ScreenFinish id={id} restart={restart} text="PARABÉNS!" img={success} description={incorrect > 0? `Você atingiu seu objetivo de Zaps!`:`Você não esqueceu de nenhum flashcard!`}/>
        );
    } else {
        return(
            <ScreenFinish id={id} restart={restart} text="Putz.." img={noSuccess} description={`Você esqueceu ${incorrect} flashcard${incorrect>1? "s" : ""}.. Não desanime! Na próxima você consegue!`} />
        )
    }
}