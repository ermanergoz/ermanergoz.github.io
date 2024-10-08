import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { UiButton } from "../components/UiButton";
import { useEffect, useRef, useState } from "react";

interface DropdownSelectionProps {
  options: string[];
  selectedFilters: string[];
  onFilterChange: (filter: string) => void;
}

interface DropdownSelectionProps {
  options: string[];
  selectedFilters: string[];
  onFilterChange: (option: string) => void;
}

const DropdownSelectionComponent = (props: DropdownSelectionProps) => {
  const [isOpen, setOpen] = useState(false);
  const firstOptionRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  
  // Handle key events for keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const focusableOptions = dropdownRef.current?.querySelectorAll(
        "input[type='checkbox']"
      );
      const index = Array.from(focusableOptions!).indexOf(document.activeElement as HTMLElement);

      if (e.key === "ArrowDown" && index < focusableOptions!.length - 1) {
        (focusableOptions![index + 1] as HTMLElement).focus();
      } else if (e.key === "ArrowUp" && index > 0) {
        (focusableOptions![index - 1] as HTMLElement).focus();
      }
    }

    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Focus first option when dropdown opens
  useEffect(() => {
    if (isOpen && firstOptionRef.current) {
      firstOptionRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="dropdown-selection" onKeyDown={handleKeyDown}>
      <UiButton
        variant="primary"
        label="Filter Policies"
        icon={<FontAwesomeIcon icon={faChevronDown} />}
        onClick={() => setOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="dropdown-selection-options"
        aria-haspopup="true"
        theme="light"
      />

      <div
        id="dropdown-selection-options"
        ref={dropdownRef}
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
