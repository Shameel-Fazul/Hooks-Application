import React, { useState } from 'react'; // Getting the useState() function from the React Library.
import uuid from 'uuid/dist/v1'; // package that generates uuid.

const SongList = () => {
// Array Destructuring (LINE 5) - Since the array is returning two values, we're destructuring and assigning each value to a variable.
    const [songs, setSongs ] = useState([  //  useState() function returns an array, and inside that array, it return two values
        { title: 'almost home', id: 1},                                        //  ^ 1) The data (The State) - `Objects`
        { title: 'memory gospel', id: 2},                                     //   ^ 2) A function (that can be used to edit the state's data)
        { title: 'the wild darkness', id: 3}
    ]);
    const addSong = () => {
        setSongs([...songs, { title: 'new song', id: uuid() }]); // invoking the uuid function.
    }
    return (
        <div className="song-list">
          <ul>
            { songs.map(song => { // We're using a state inside a functional component.
              return ( <li key={ song.id }>{ song.title }</li> );
            }) }
          </ul>
          <button onClick={addSong}>Add a song</button>
        </div>
      );
}

export default SongList;

