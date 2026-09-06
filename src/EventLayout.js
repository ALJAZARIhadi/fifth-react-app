import { Outlet } from "react-router-dom"

export default function EventLayout ()
{
    return(
        <>
            <div style={{background:"black",color:"white"}}>
                <h1>Events</h1>
            </div>
            <div>
                <Outlet/>
            </div>
            <div style={{background:"black",color:"white"}}>
                <h1>Events</h1>
            </div>
        </>
    )
}
