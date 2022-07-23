import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to="/">
                <h1>This is the home page</h1>
            </Link>
            <Link to="about">Click to view our about page</Link>
            <Link to="contact">Click to view our contact page</Link>
            <Link to="Joke">Click to view our Joke page</Link>
        </div>
    );
}

export default Home;