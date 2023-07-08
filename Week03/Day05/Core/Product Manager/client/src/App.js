import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AddForm from './components/AddForm';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/product/new' element={<AddForm />} />
      </Routes>
    </div>
  );
}

export default App;
