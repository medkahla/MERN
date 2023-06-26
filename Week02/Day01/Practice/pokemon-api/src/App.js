import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([])
  const fetchPokemons = ()=>{
    // fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
    //   .then(response =>{
    //     return response.json();
    //   }).then((requestedPokemons)=>{
    //     setPokemons(requestedPokemons.results)
    //   }).catch(err => {
    //       console.log(err);
    //   })

    //  WITH AXIOS
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807').then(response=>{
      setPokemons(response.data.results)
    })
  }

  return (
    <div className="App">
       <button onClick={fetchPokemons}>Fetch Pokemons</button>
       <hr />
       <ol>
          {
          pokemons.map((pokemon, i)=>{
            return <li key={i}>{pokemon.name}</li>
          })
          }
       </ol>
    </div>
  )

}

export default App;
