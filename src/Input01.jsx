import React, { useRef } from 'react';

const Input01 = ({ tagName, placeholder, id, setShowDetails, value}) => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="input01" onClick={handleClick} id={id}
      onFocus={() => setShowDetails && setShowDetails(true)}
      onBlur={() => setShowDetails && setShowDetails(false)}>
      <span>{tagName}</span>
      <input ref={inputRef} placeholder={placeholder} value={value} />
    </div>
  );
};

export default Input01;