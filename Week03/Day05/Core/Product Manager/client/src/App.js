import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AddForm from './components/AddForm';
import OneProduct from './components/OneProduct';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/product/new' element={<AddForm />} />
        <Route path='/ShowProduct/:id' element={<OneProduct />} />
        <Route path='/UpdateProduct/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
