import logoZap from '../assets/logo.png';
import next from '../assets/next.png';
import "../home/home.css"

export default function Home() {
    return(
        <section>
            <img src={logoZap} alt="logo home" />
            <button onClick={() => alert('oi')}>
            Praticar React 
            <img src={next} alt={next} />
            </button>            
        </section>
    );
}