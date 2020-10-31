import React, { useState } from "react";

export default function FormInput(props) {
  const [value, setValue] = useState("");
  const errors = [];

  props.validations.forEach((validation) => {
    const result = validation(value);

    if (result !== true) {
      errors.push(result);
    }
  });

  props.onEnter(errors.length ? null : value);

  let errorsList = null;
  if (errors.length) {
    errorsList = (
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      {errorsList}
    </>
  );
}
