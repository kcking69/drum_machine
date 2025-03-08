import { useState } from 'react';
import AudioButton from './AudioButton';

const App = () => {
  const audioData = [
    {
      id: 'Q',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
    },
    {
      id: 'W',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
    },
    {
      id: 'E',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
    },
    {
      id: 'A',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
    },
    {
      id: 'S',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
    },
    {
      id: 'D',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
    },
    {
      id: 'Z',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
    },
    {
      id: 'X',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
    },
    {
      id: 'C',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
    },
  ];
  const [display, setDisplay] = useState('');
  const chooseItem = (data) => {
    setDisplay(data);
  };

  return (
    <>
      <div className='drum-machine' id='drum-machine'>
        <div className='display' id='display'>
          {display}
        </div>
        {audioData.map((a) => {
          console.log(a.src);
          return (
            <AudioButton
              chooseItem={chooseItem}
              key={a.id}
              id={a.id}
              audioSrc={a.src}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
