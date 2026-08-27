import { useState } from 'react';
import Wheel from './components/Wheel';
import OptionsForm from './components/OptionsForm';
import { getSpinRotation } from './utils/wheelHelpers';

function App() {
  const [options, setOptions] = useState(['Pizza', 'Sushi', 'Pâtes', 'Burger']);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);

  function handleAddOption(option) {
    setOptions([...options, option]);
  }

  function handleRemoveOption(indexToRemove) {
    setOptions(options.filter((_, index) => index !== indexToRemove));
  }

  function handleSpin() {
    if (isSpinning || options.length < 2) return;

    setIsSpinning(true);
    setWinner(null);

    const winningIndex = Math.floor(Math.random() * options.length);
    const newRotation = getSpinRotation(winningIndex, options.length, rotation);
    setRotation(newRotation);

    setTimeout(() => {
      setWinner(options[winningIndex]);
      setIsSpinning(false);
    }, 4000);
  }

  return (
    <div className="App">
      <h1>Roue du hasard</h1>

      <OptionsForm
        options={options}
        onAddOption={handleAddOption}
        onRemoveOption={handleRemoveOption}
      />

      <Wheel options={options} rotation={rotation} />

      <button onClick={handleSpin} disabled={isSpinning || options.length < 2}>
        {isSpinning ? 'Ça tourne...' : 'Tourner'}
      </button>

      {winner && <p>Résultat : {winner} !</p>}
    </div>
  );
}

export default App;