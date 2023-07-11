import './App.css';
import Typography from '@mui/material/Typography';
import { Routes , Route } from 'react-router-dom'
import Main from './components/Main';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';


function App() {
  return (
    <div className="App">
      <Typography variant='h1' align="left" color={"#215312"}  >Favorite Authors</Typography>
      
      <Routes>
        <Route path="/" element = {<Main />} />
        <Route path="/new" element = {<AddForm />} />
        <Route path="/edit/:id" element = {<UpdateForm  />} />
      </Routes>
    </div>
  );
}

export default App;
