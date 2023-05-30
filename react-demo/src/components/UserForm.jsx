import React, { useState } from "react";
import useInput from "../hooks/useInput";

const UserForm = () => {
  const [firstName, bindFirstName, resetFirst] = useInput("");
  const [lastName, bindLastName, resetLast] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`hello ${firstName} ${lastName}`);
    resetFirst();
    resetLast();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          first name:
          <input {...bindFirstName} type="text" />{" "}
        </label>
        <label>
          last name: <input {...bindLastName} type="text" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
