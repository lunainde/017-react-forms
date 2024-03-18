import { useState } from "react";

import React from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  {/* onChange event & handler f(x) for each INPUT will run on every keystroke or change in the input. */}
  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleDirectorInput = (e) => setDirector(e.target.value);
  const handleRatingInput = (e) => setIMDBRating(e.target.value);
  const handleOscarsInput = (e) => setHasOscars(e.target.checked);

  // add an onSubmit event
  const handleSubmit = (e) => { e.preventDefault();  // <== ADD e.preventDefault()
    const newMovie = { title, director, IMDBRating, hasOscars };
    
    console.log("Submitted: ", newMovie);
    props.addMovie(newMovie);                         // <== ADD
    
    // Reset the state
    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(true);
  };
  
  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      {/* form will be added here */}
      <form onSubmit={handleSubmit} >   {/* => called every time the form is submitted */}
        <label>Title: </label>
        <input type="text" name="title" value={title} />

        <label>Director: </label>
        <input type="text" name="director" value={director} />

        <label>IMDB Rating: </label>
        <input type="number" name="IMDBRating" value={IMDBRating} />

        <label>Won Oscars: </label>
        <input type="checkbox" name="hasOscars" checked={hasOscars} />

        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
