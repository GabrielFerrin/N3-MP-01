import React, { useRef } from 'react';

const Input = ({ tagName, placeholder, id, onFocus = null,
  onChange = null, value }) => {
  const inputRef = useRef(null);
  const handleClick = () => inputRef.current.focus();
  return (
    <div className="input" onClick={handleClick} id={id}
      onFocus={(e) => onFocus && onFocus(e)}>
      <span>{tagName}</span>
      <input ref={inputRef} placeholder={placeholder} value={value}
        onChange={(e) => onChange && onChange(e.target.value)} />
    </div>
  );
};

export default Input;