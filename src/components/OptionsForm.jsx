import { useState } from 'react';

function OptionsForm({ options, onAddOption, onRemoveOption }) {
  const [newOption, setNewOption] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedOption = newOption.trim();
    if (trimmedOption === '') return;

    onAddOption(trimmedOption);
    setNewOption('');
  }

  return (
    <div className="options-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Ajouter une option..."
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {options.map((option, index) => (
          <li key={index}>
            {option}
            <button onClick={() => onRemoveOption(index)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OptionsForm;