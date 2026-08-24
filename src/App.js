import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
function App() {
  return (
    <div className="App">
      



      {/*Routes */}
      <Routes>
        <Route path='/hello' element={<h1>Hello World</h1>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
