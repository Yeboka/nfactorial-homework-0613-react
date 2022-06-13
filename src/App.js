import './App.css';
import {format} from 'date-fns';
import icon from './myicon.png';

const date = format(new Date(), 'dd.MM.yyyy HH:mm')

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='left'>
          <img id='icon' src={icon}/>
          <input id='input' type='text' />
        </div>
        <div className='right'>
          {date}
        </div>
      </header>
      <body>
        <div className='container' >
        <div className='img-container' id='first'>
          HEY
        </div>
        <div className='img-container' id='sec'>
          LET'S
        </div>
        <div className='img-container' id='thr'>
          GIVE
        </div>
        <div className='img-container' id='four'>
          ALL
        </div>
        <div className='img-container' id='five'>
          YOU CAN
        </div>
        </div>
      </body>
    </div>
  );
}

export default App;
