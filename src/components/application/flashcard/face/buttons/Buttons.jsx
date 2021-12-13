import Button from "./button/Button";
import Button2 from "./button/Button2";

export default function Buttons(props) {
    const {
        functionExec,
        button,
        result
    } = props;

    const buttons = [
        {
            color: "black",
            text: "Aprendi agora"
        },
        {
            color: "red",
            text: "Não lembrei"
        },
        {
            color: "green",
            text: "Lembrei com esforço"
        },
        {
            color: "yellow",
            text: "Zap!"
        }
    ];

    if (button === "button2"){
        return (
            <Button2 functionExec={functionExec} />
        );
    } else {
        return(
            <div className="buttons">
                {buttons.map((button, index) => {
                    const {
                        color,
                        text
                    } = button;

                    return (
                        <Button key={index} color={color} text={text} result={result} />
                    )
                })}
            </div>
        );
    }
}