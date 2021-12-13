import turn from "../../../../../assets/turn.png"
export default function Button2({functionExec}){
    return(
        <div className="buttons2">
            <img src={turn} alt="return" onClick={functionExec} />
        </div>
    );
}