import next from "../../assets/next.png"
export default function ScreenFinish(props){
    const {
        text,
        img,
        description,
        id,
        restart
    } = props;
    console.log(restart);
    return(
        <section className="finish">
            <div>
                <p>{text}</p>
                <img src={img} alt={text} />
            </div>
            <p>{description}</p>
            <button onClick={() => restart(id)}>
                Tentar novamente
                <img src={next} alt="next" />
            </button>
            <button onClick={() => window.location.reload()}>
                Voltar para a Home
                <img src={next} alt="next" />
            </button>
        </section>
    );
}