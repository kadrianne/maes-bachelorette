import './App.css';
import Countdown, { zeroPad } from 'react-countdown';
import Blink from 'react-blink-text';
import Sparkles from './Sparkles';
import Schedule from './Schedule';
import { scheduleData } from './scheduleData';
import { GiDiamondRing } from 'react-icons/gi'

function App() {
  // const partyDate = 1617973200000;
  const weddingDate = 1619899200000;

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

  const renderSchedule = () => scheduleData.map(day => <Schedule day={day} />)
  const renderText = () => <>the weddiNG <GiDiamondRing className='diamond' /></>;

  return (
    <div className="App">
      <main>
        <h1>
          <Sparkles color='#ffc864'>
            MAE + ALVIN
          </Sparkles>
          <br></br>
          <Sparkles color='#bd5d6b'>
            <Blink color='#ffc864' text={renderText()} fontSize='60px'></Blink>
          </Sparkles>
        </h1>
        <section className='details'>
          <p>gurney's montauk resort & seawater spa</p>
          <p>290 old montauk highway</p>
          <p>montauk, ny 11954</p>
        </section>
        <Countdown date={weddingDate} renderer={renderer} />
        <Sparkles color='#ffc864'>
          <section className='schedule'>
            {renderSchedule()}
          </section>
        </Sparkles>
      </main>
    </div>
  );
}

export default App;
