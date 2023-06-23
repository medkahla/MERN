import './App.css';
import ColoredBox from './components/ColoredBox';
import AddColor from './components/AddColor';
import { useState } from 'react';

function App() {
  const [colors, setColors] = useState(['red', 'blue', 'purple'])
  return (
    <div className="App">
        
        <AddColor  colors={colors} setColors={setColors}/>
        
        {colors.map((color , index) => {
        return <ColoredBox color={color} key={index}/> 
        })}

    </div>
  );
}

export default App;
