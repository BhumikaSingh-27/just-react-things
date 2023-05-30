import React, { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const DocTitleOne = () => {
  const [counter, setCounter] = useState(0);

  useDocumentTitle(counter);

  return (
    <div>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Count- {counter}
      </button>
    </div>
  );
};

export default DocTitleOne;
