import React from 'react';

export default function Input({ placeholder }) {
  return (
    <div>
      <input
        id="myInput"
        type="text"
        name="myCountry"
        placeholder={placeholder}
      />
    </div>
  );
}
