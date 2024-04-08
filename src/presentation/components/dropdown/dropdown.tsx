// types
import { FC } from "react";
import { DropdownProps } from "./dropdown.interfaces";
// styles
import {
  DropdownMenu,
  DropdownOption,
  DropdownContainer,
} from "./dropdown.styles";

const Dropdown: FC<DropdownProps> = ({ options, isOpen }) => (
  <DropdownContainer>
    {isOpen && (
      <DropdownMenu>
        {options.map((option, index) => (
          <DropdownOption key={index}>{option}</DropdownOption>
        ))}
      </DropdownMenu>
    )}
  </DropdownContainer>
);

export default Dropdown;
