import React from 'react';

function StyledButton({ text, onClick, className }) {
  return (
    <button className={`btn btn-secondary`} onClick={onClick}>
      {text}
    </button>
  );
}

export default StyledButton;
