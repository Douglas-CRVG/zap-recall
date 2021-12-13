import logoZap from '../assets/logo.png';
import "../home/home.css"
import ButtonHome from './ButtonHome';

export default function Home({startRecall, data}) {
    return(
        <section className="home">
            <img src={logoZap} alt="logo home" />
            <div>
                {data.map(({title}, index) => <ButtonHome title={title} startRecall={startRecall} index={index}/>)}
            </div>
            
        </section>
    );
}