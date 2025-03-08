import { useRef } from 'react';

const AudioButton = ({ audioSrc, id, chooseItem }) => {
  const audioRef = useRef(null);
  const handlePlay = (e) => {
    if (audioRef.current) {
      audioRef.current.play();
      let letter = e.target.id;
      chooseItem(letter);
    }
  };
  const keyPress = (e) => {
    if (e.key.toUpperCase() === audioRef.current.id) {
      audioRef.current.play();
      let letter = e.key.toUpperCase();
      chooseItem(letter);
    }
  };
  window.addEventListener('keydown', keyPress);

  return (
    <button className='drum-pad' id={id} onClick={handlePlay}>
      {id}
      <audio ref={audioRef} id={id} className='clip' src={audioSrc}></audio>
    </button>
  );
};

export default AudioButton;
