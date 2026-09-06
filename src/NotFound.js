import { Link } from "react-router-dom"
export default function NotFound()
{
    return (
        <>
            <h1>404 (NOt Found)</h1>
            <h3>The url you visited is not defined</h3>
            <Link to="/">
            <button>Return Home Page</button>
            </Link>
        </>
    )
}
