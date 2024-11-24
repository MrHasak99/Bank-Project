import React from "react";

const Input = ({ text, onChange }) => {
  return (
    <div className="flex justify-center ">
      <h1 className="w-[25%]">{text}</h1>
      <input
        onChange={onChange}
        className="w-[70%] border pl-2 border-black rounded-md"
        placeholder={text}
      />
    </div>
  );
};

export default Input;
