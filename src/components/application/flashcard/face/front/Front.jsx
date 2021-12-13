import "../front/front.css";
import Buttons from "../buttons/Buttons";
import Title from "../title/Title";
import Content from "../content/Content";

export default function Front(props) {
    const {
        setClassName,
        question,
        count,
        total
    } = props;

    return (
        <div className={`front-face face`}>
            <Title counter={`${count + 1}/${total}`} question="" />
            <Content content={question} />
            <Buttons button="button2" functionExec={() => setClassName("response")} />
        </div>
    );
}