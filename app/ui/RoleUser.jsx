"use client";

import React, { useState } from "react";

const MyForm = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => {
      const updatedCheckboxes = { ...prevCheckboxes };

      updatedCheckboxes[checkboxName] = !prevCheckboxes[checkboxName];

      if (checkboxName === "checkbox1" && updatedCheckboxes.checkbox1) {
        updatedCheckboxes.checkbox3 = true;
        updatedCheckboxes.checkbox4 = true;
      } else if (checkboxName === "checkbox2" && updatedCheckboxes.checkbox2) {
        updatedCheckboxes.checkbox5 = true;
        updatedCheckboxes.checkbox6 = true;
      } else {
        updatedCheckboxes.checkbox3 = false;
        updatedCheckboxes.checkbox4 = false;
        updatedCheckboxes.checkbox5 = false;
        updatedCheckboxes.checkbox6 = false;
      }

      return updatedCheckboxes;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkedValues = Object.keys(checkboxes).filter(
      (checkbox) => checkboxes[checkbox]
    );
    console.log("Checked Values:", checkedValues);
    // You can do whatever you want with the checkedValues array here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Checkbox 1
        <input
          type="checkbox"
          checked={checkboxes.checkbox1}
          onChange={() => handleCheckboxChange("checkbox1")}
        />
      </label>
      <label>
        Checkbox 2
        <input
          type="checkbox"
          checked={checkboxes.checkbox2}
          onChange={() => handleCheckboxChange("checkbox2")}
        />
      </label>
      {/* ... Other checkboxes ... */}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
