import logoZap from '../assets/logo.png';
import next from '../assets/next.png';
import "../home/home.css"

export default function Home({setAppScreen}) {
    return(
        <section>
            <img src={logoZap} alt="logo home" />
            <button onClick={() => setAppScreen("Application")} data-identifier="start-zap-recall">
            Praticar React 
            <img src={next} alt={next} />
            </button>            
        </section>
    );
}