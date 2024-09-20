import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { UiButton } from "../components/UiButton";

interface DropdownSelectionProps {
  options: string[];
  selectedFilters: string[];
  onFilterChange: (filter: string) => void;
}

import { useEffect, useRef } from "react";

const DropdownSelectionComponent = (props: DropdownSelectionProps) => {
  const [isOpen, setOpen] = useState(false);
  const firstOptionRef = useRef<HTMLInputElement | null>(null);
  
  useEffect(() => {
    if (isOpen && firstOptionRef.current) {
      firstOptionRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="dropdown-selection">
      <UiButton
        variant="primary"
        label="Filter Policies"
        icon={<FontAwesomeIcon icon={faChevronDown} />}
        onClick={() => setOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="dropdown-selection-options"
      />

      <div
        id="dropdown-selection-options"
        className={`${isOpen ? "dropdown-selection--open" : "dropdown-selection--closed"}`}
        role="menu"
        aria-hidden={!isOpen}
      >
        {props.options.map((option, index) => (
          <label key={option} className="dropdown-selection__option">
            <input
              ref={index === 0 ? firstOptionRef : null}
              type="checkbox"
              checked={props.selectedFilters.includes(option)}
              onChange={() => props.onFilterChange(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default DropdownSelectionComponent;
