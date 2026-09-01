import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Hello from "./Hello";
import EventsList from './EventsList'
function App() {
  return (
    <div className="App">
      {/*Today I learend the <Link /> tag in react */}
      <div style={{fontSize:"30px"}}>
        <Link to="/">
        <button style={{fontSize:"30px"}}>Home</button>
        </Link>
        <Link to="/Events">
        <button style={{fontSize:"30px"}}>Events</button>
        </Link>
        <Link to="hello">
        <button style={{fontSize:"30px"}}>Contact</button>
        </Link>
      </div>
      {/*Routes the logic here is like the lojic in the contex because we import it from then used it*/}
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Events" element={<EventsList />} />
      </Routes>
    </div>
  );
}

export default App;
