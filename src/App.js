import { useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState('');
  const [canSnap, setCanSnap] = useState(false);

  const handleMessageChange = event => {
    setMessage(event.target.value);
    setCanSnap(message.split('\n').length > 1);
  };

  const snapClicked = () => {
    const items = message.split('\n');
    const snapped = theSnap(items);
    setMessage(snapped.join('\n'));
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
        <p>
          Enter the list and *snap* 🫰 away
        </p>

        <div>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>

        {canSnap && (
          <div>
            <button onClick={snapClicked}>
              🫰
            </button>
          </div>
        )}

        <div>
          <p>{message}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
