import { Link } from "react-router-dom";
import { eventsContext } from "./contexts/eventsContext";
import { useContext } from "react";


export default function Events() {
    const eventss = useContext(eventsContext);
  let eventsList = eventss.map((event) => {
    return (
      <Link key={event.id} to={`/events/${event.id}`}>
        <div
          style={{
            background: "blue",
            marginTop: "10px",
            color: "white",
            padding: "10px",
          }}
        >
          <h1>{event.title}</h1>
        </div>
      </Link>
    );
  });
  return <>{eventsList}</>;
}
