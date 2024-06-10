import React, { useRef } from 'react';

const Input = ({ tagName, placeholder, id, onFocus = null,
  onChange = null, locationKey }) => {
  const inputRef = useRef(null);
  const handleClick = () => inputRef.current.focus();
  const handleOnFocus = (e) => onFocus && onFocus(e);
  return (
    <div className="input" onClick={handleClick} id={id}
      onFocus={handleOnFocus}>
      <span>{tagName}</span>
      <input ref={inputRef} placeholder={placeholder} value={locationKey}
        onChange={(e) => onChange &&onChange(e.target.value)} />
    </div>
  );
};

export default Input;