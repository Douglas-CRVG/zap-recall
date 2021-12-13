export default function Button({color, text, result}){
    return(
        <div className={`${color}`} onClick={()=> result(color)}>
            <p>
                {text}
            </p>
        </div>
    );
}