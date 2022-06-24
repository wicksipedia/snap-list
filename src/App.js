import { useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ItemInput from './ItemInput';
import DisplayItems from './DisplayItems';
import './App.css';

function App() {

  const [items, setItems] = useState([]);

  const [startedSnapping, setStartedSnapping] = useState(false);
  const [canSnap, setCanSnap] = useState(false);
  
 const [, updateState] = useState();
 const forceUpdate = useCallback(() => updateState({}), []);

  const handleNamesChange = event => {
    setItems(event);
    setCanSnap(items.length > 1);
  };

  const snapClicked = () => {
    setStartedSnapping(true);
    const snapped = theSnap(items);
    setItems(snapped);
    setCanSnap(items.length > 1);
    forceUpdate();
  };

  const theSnap = items => {
    const numberToSnap = Math.floor(items.length / 2);
    
    shuffle(items);
    items.splice(0, numberToSnap);

    return items;
  };

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <div class="app">
      <ItemInput visible={!startedSnapping} onChange={handleNamesChange} />
      {canSnap && (
        <div>
          <Button onClick={snapClicked}>
            🫰
          </Button>
        </div >
      )}
      <DisplayItems visible={startedSnapping} items={items}/>
    </div>
  );
}

export default App;
