import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Hello from "./Hello";
import EventsList from "./EventsList";
import EventDetails from "./EventDetails";
import { eventsContext } from "./contexts/eventsContext";
import NotFound from "./NotFound";
import NewEvent from "./NewEvent";
import EventLayout from "./EventLayout";
function App() {
  let eventsData = [
    {
      id: 1,
      title: "Hello world",
      body: "dsj jjs dj kjs ",
    },
    {
      id: 2,
      title: "Hi world",
      body: "dsj jjs dj kjs ",
    },
    {
      id: 3,
      title: "Welcome world",
      body: "dsj jjs dj kjs ",
    },
  ];

  return (
    <eventsContext.Provider value={eventsData}>
      <div className="App">
        {/*Today I learend the <Link /> tag in react */}
        <div style={{ fontSize: "30px" }}>
          <Link to="/">
            <button style={{ fontSize: "30px" }}>Home</button>
          </Link>
          <Link to="/Events">
            <button style={{ fontSize: "30px" }}>Events</button>
          </Link>
          <Link to="hello">
            <button style={{ fontSize: "30px" }}>Contact</button>
          </Link>
        </div>
        {/*Routes the logic here is like the lojic in the contex because we import it from then used it*/}
        <Routes>
          <Route path="/hello" element={<Hello />} />
          <Route path="/events" element={<EventLayout />}>
            <Route index element={<EventsList />} />
            <Route path=":eventId" element={<EventDetails />} />
            <Route path="new" element={<NewEvent />} />
            <Route path="delete" element={<EventDetails />} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </eventsContext.Provider>
  );
}

export default App;
