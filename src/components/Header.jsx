import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link className="header-links" to="/">
                <h1>Random Stuff</h1>
            </Link>
            <Link className="header-links" to="about">Kanye Rest</Link>
            <Link className="header-links" to="contact">Contact</Link>
            <Link className="header-links" to="Joke">Joke API</Link>
        </header>
    );
}

export default Header;