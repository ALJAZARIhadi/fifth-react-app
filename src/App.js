import logo from './logo.svg';
import './App.css';
import { Route, Routes } from  'react-router-dom';
import HomePage from './HomePage';
function App() {
  return (
    <div className="App">
      



      {/*Routes the logic here is like the lojic in the contex because we import it from then used it*/}
      <Routes>
        <Route path='/hello' element={<h1>Hello World</h1>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
