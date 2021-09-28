import React from 'react';

export const LabelErrorInput = ({ id, message }) => {
  return (
    <small id={id} className="p-error p-d-block">
      {message}
    </small>
  );
};
