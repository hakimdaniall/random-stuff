import React from 'react';
import Button from './../components/Button';
import Card from './../components/Card';
import Note from './../components/Note';
import notes from '../notes'

function Joke() {
    const [Joke, setJoke] = React.useState("")

    const fetchApi = () => {
        fetch("https://v2.jokeapi.dev/joke/Any")
            .then((res) => res.json())
            .then((data) => setJoke(data));
    }
    return (
        <div>
            <div className="note-item">
                {notes.map((noteItem) =>
                    <Note
                        key={noteItem.key}
                        id={noteItem.key}
                        title={noteItem.title}
                        content={noteItem.content}
                    />
                )}
            </div>
            <h2 className='ta-center'>Want more random jokes?</h2>
            <div>
                <Button callApi={fetchApi} />
                {Joke && (
                    <Card
                        id={Joke.id}
                        category={Joke.category}
                        setup={Joke.setup}
                        delivery={Joke.delivery}
                        joke={Joke.joke}
                    />
                )}
            </div>
        </div>
    )
}

export default Joke;