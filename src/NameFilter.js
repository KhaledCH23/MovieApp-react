import React from "react";
const NameFilter = ({ value, onChange }) => {
  return (
    <div className="name-filter">
      <input
        placeHolder="Type the serie name to search"
        value={value}
        className="name-filter-text"
        type="text"
        onChange={onChange}
      />
      <input className="name-filter-button" type="button" value="Search" />
    </div>
  );
};
export default NameFilter;
