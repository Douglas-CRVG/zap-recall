import next from '../assets/next.png';

export default function ButtonHome({title, startRecall, index}) {
    return (
        <button onClick={() => startRecall(index)} data-identifier="start-zap-recall">
            {title} 
            <img src={next} alt={next} />
        </button>
    );
}