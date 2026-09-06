import { useParams } from "react-router-dom";
import { useContext } from "react";
import { eventsContext } from "./contexts/eventsContext";

export default function EventDetails() {
  const events = useContext(eventsContext);
  const { eventId } = useParams();

  const event = events.find((e) => {
    return e.id == eventId;
  });
if(event){
    return (
    <>
      <h2>Event Details Page</h2>
      <h1>{event.title}</h1>
      <p>{event.body}</p>
    </>
  ); 
}else{
    return(
        <>
            <h1>The event with id : {eventId} is not exist</h1>
        </>
    )
}
 
}
