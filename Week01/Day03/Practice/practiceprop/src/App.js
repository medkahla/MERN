import './App.css';
import ShowUser from './components/ShowUser';

function App() {
  const person = [
    {
      firstName: "Doe",
      lastName: "Jane",
      age: 45,
      hairColor: "Black"
    },
    {
      firstName: "Smith",
      lastName: "John",
      age: 88,
      hairColor: "Brown"
    },
    {
      firstName: "Fillmore",
      lastName: "Millard",
      age: 55,
      hairColor: "Brown"
    },
    {
      firstName: "Smith",
      lastName: "Maria",
      age: 62,
      hairColor: "Brown"
    }
  ]
  return (
    <div className="App">
      <ShowUser person = {person}/>
    </div>
  );
}

export default App;
