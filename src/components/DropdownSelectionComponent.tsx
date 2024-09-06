import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { UiButton } from "../components/UiButton";

interface DropdownSelectionProps {
  options: string[];
  selectedFilters: string[];
  onFilterChange: (filter: string) => void;
}

const DropdownSelectionComponent = (props: DropdownSelectionProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="dropdown-selection">
      <UiButton
        variant="primary"
        label={
          <p>
            Filter Policies&emsp;
            <FontAwesomeIcon icon={faChevronDown} />
          </p>
        }
        onClick={() => setOpen(!isOpen)}
      />

      <div className={`${isOpen ? "dropdown-selection--open" : "dropdown-selection--closed"}`}>
        {props.options.map((option) => (
          <label key={option} className="dropdown-selection__option">
            <input
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
