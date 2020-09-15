import React, { useState } from 'react';

const NewSongForm = ({addSong}) => { //Destructuring

    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle(''); // To refresh input box data.
    }
    return (
        <form onSubmit={ handleSubmit }>
            <label>Song name:</label>
            <input type="text" value={title} required onChange={ (e) => setTitle(e.target.value)} />
            <input type="submit" value="add song" />
        </form>
    );
}

export default NewSongForm;