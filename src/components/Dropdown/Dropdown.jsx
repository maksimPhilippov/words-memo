import React, { useState } from "react";
import "./style.css";

export default function Dropdown({ options, current, onChoose }) {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className="dropdown-base"
      onClick={() => setOpened(!opened)}
      onBlur={() => setOpened(false)}
    >
      {current}
      {opened && (
        <ul>
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-option"
              onClick={() => onChoose(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
