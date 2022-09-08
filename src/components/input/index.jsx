import { React } from "react";

function Input({ title, id, onChange, value, placeholder }) {
  return (
    <label>
      <h2>{title}</h2>
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input;
