import React, { useRef, useEffect } from 'react';

const Input01 = ({ tagName, placeholder }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="input01" onClick={handleClick}>
      <span>{tagName}</span>
      <input ref={inputRef} placeholder={placeholder} />
    </div>
  );
};

export default Input01;