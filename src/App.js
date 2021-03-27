import './App.css';
import Countdown, { zeroPad } from 'react-countdown';
import Blink from 'react-blink-text';
import Sparkles from './Sparkles';

function App() {
  const partyDate = 1617973200000;

  const Complete = () => <h2>🎉</h2>

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Complete />;
    } else {
      return (
        <div className='countdown'>
          <p><span className='time'>{zeroPad(days)}</span> DAYS</p>
          <p><span className='time'>{zeroPad(hours)}</span> HOURS</p>
          <p><span className='time'>{zeroPad(minutes)}</span> MINUTES</p>
          <p><span className='time'>{zeroPad(seconds)}</span> SECONDS</p>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <main>
        <h1>
          <Sparkles color='#ffc864'>
            MAE'S LAST FLING
          </Sparkles>
          <br></br>
          <Sparkles color='#bd5d6b'>
            <Blink color='#ffc864' text="BEFORE THE NG" fontSize='60px'></Blink>
          </Sparkles>
        </h1>
        <section className='details'>
          <p>april 9-11, 2021</p>
          <p>red hook, ny</p>
        </section>
        <Countdown date={partyDate} renderer={renderer} />
        <h2>schedule coming soon!</h2>
      </main>
    </div>
  );
}

export default App;
