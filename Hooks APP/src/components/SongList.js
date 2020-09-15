import React, { useState, useEffect } from 'react'; // Getting the useState() function from the React Library.
import uuid from 'uuid/dist/v1'; // package that generates uuid.
import NewSongForm from './NewSongForm';

const SongList = () => {
// Array Destructuring (LINE 5) - Since the array is returning two values, we're destructuring and assigning each value to a variable.
    const [songs, setSongs ] = useState([  //  useState() function returns an array, and inside that array, it return two values
        { title: 'almost home', id: 1},                                        //  ^ 1) The data (The State) - `Objects`
        { title: 'memory gospel', id: 2},                                     //   ^ 2) A function (that can be used to edit the state's data)
        { title: 'the wild darkness', id: 3}
    ]);

    const [age, setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, { title: title, id: uuid() }]); // invoking the uuid function.
    }

    useEffect(() => { // useEffect() function takes a callback function as a parameter, and will invoke
      console.log('useEffect hook ran', songs);  // everytime this component initializes or updates.
    }, [songs]) // < We can add a second parameter to specify what to watch.
                // < In this case, it's watching 'songs' and 
                // it'll run the callback function whenever the data in 'songs' update.

    useEffect(() => {
      console.log('useEffect hook ran', age);
    }, [age])
    
    return (
        <div className="song-list">
          <ul>
            { songs.map(song => { // We're using a state inside a functional component.
              return ( <li key={ song.id }>{ song.title }</li> );
            }) }
          </ul>
          <NewSongForm addSong={ addSong }/>
          <button onClick={ (e) => setAge(age + 1)}>Add 1 to age: { age }</button>
        </div>
      );
}

export default SongList;

