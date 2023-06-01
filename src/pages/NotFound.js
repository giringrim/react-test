import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Not Found Pages</h1><br />
			<Link to="/" >← Back to home</Link>
        </div>
    );
}