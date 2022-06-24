import { useState } from 'react';
import './App.css';

function App() {

  const [Name, setNames] = useState('');
  const [items, setItems] = useState([]);
  const [startedSnapping, setStartedSnapping] = useState(false);
  const [canSnap, setCanSnap] = useState(false);

  const handleNamesChange = event => {
    setNames(event.target.value);
    const items = Name.split('\n');
    setItems(items);
    setCanSnap(items.length > 1);
  };

  const snapClicked = () => {
    setStartedSnapping(true);
    const snapped = theSnap(items);
    setNames(snapped.join('\n'));
    setCanSnap(items.length > 1);
  };

  const theSnap = items => {
    const numberToSnap = Math.floor(items.length / 2);
    for (let i = 0; i < numberToSnap; i++) {
      items.splice(generateRandomInteger(0, items.length), 1);
    }
    return items;
  };

  const generateRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  return (
    <div className="App">
      <header className="App-header">
        {!startedSnapping && (
          <>
            <p>
              Enter the list and *snap* 🫰 away
            </p>

            <div>
              <textarea
                id="Name"
                name="Name"
                value={Name}
                onChange={handleNamesChange}
              />
            </div>
          </>
        )}
        {canSnap && (
          <div>
            <button onClick={snapClicked}>
              🫰
            </button>
          </div>
        )}

        <div>
          <pre>{Name}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;
