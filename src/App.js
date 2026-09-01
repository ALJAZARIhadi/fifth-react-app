import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Hello from './Hello'
function App() {
  return (
    <div className="App">
      {/*Today I learend the <Link /> tag in react */}
      <div>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Events</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </div>
      {/*Routes the logic here is like the lojic in the contex because we import it from then used it*/}
      <Routes>
        <Route path="/hello" element={<Hello/>} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
