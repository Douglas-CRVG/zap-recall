export default function ScreenFinish(props){
    const {
        text,
        img,
        description
    } = props;

    return(
        <section className="finish">
            <div>
                <p>{text}</p>
                <img src={img} alt={text} />
            </div>
            <p>{description}</p>
        </section>
    );
}