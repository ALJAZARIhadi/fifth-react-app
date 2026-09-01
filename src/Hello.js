import { Link } from "react-router-dom";

export default function Hello(){
    return(
    <>
        <h1>Hello World this is an external Component That Called by reoutes </h1>
        <Link to="/">
        <div style={{background:"green" , padding:"20px"}}>
            <h1>Go Home Page</h1>
        </div>
        </Link>
    </>
    )
}
