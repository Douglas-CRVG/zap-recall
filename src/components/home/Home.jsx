import logoZap from '../assets/logo.png';
import "../home/home.css"
import ButtonHome from './ButtonHome';

export default function Home(props) {
    const {
        startRecall,
        data,
        setZaps,
        zaps
    } = props;

    return(
        <section className="home">
            <img src={logoZap} alt="logo home" />
            <div>
                <input type="number" placeholder="Sua meta de zaps" min="1" onChange={(e) => setZaps(Number(e.target.value))} value={zaps} />
                {data.map(({title}, index) => <ButtonHome title={title} startRecall={startRecall} index={index}/>)}
            </div>
            
        </section>
    );
}