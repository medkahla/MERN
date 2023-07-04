import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import ErrorMsg from './components/ErrorMsg';

function App() {

  return (
    <div className="App">
        <Form/>
        <Routes>
          <Route path='/:selectedResource/:resourceId' element={<Display />} />
          <Route path='/Error' element={<ErrorMsg />} />
        </Routes>
    </div>
  );
}

export default App;
