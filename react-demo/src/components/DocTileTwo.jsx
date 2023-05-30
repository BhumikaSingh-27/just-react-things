import React, {useState } from 'react'
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const DocTileTwo = () =>{
    const [counter, setCounter] = useState(0);
  
    useDocumentTitle(counter); // when button is clicked, counter changes and this will cause this to re-render
    //useDocumentTitle is re-rendered.
    return (
      <div>
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Count- {counter}
        </button>
      </div>
    );
  };

export default DocTileTwo