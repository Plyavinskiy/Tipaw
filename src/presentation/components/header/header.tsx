// components
import Dropdown from "../dropdown";
import ProfileInfo from "../profile-info";
import LanguageSelector from "../language-selector";
// assets
import BellIcon from "../../../assets/icons/bell.svg";
// hooks
import { useState } from "react";
// types
import { FC } from "react";
import { Language, HeaderProps } from "./header.interfaces";
// styles
import {
  Logo,
  Controls,
  StyledLink,
  HeaderWrapper,
  StyledBellIcon,
} from "./header.styles";

const options = ["Profile", "Settings", "Log Out"];

const Header: FC<HeaderProps> = ({ name, avatar }) => {
  const [currentLanguage, setCurrentLanguage] = useState(Language.French);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderWrapper>
      <StyledLink to="/">
        <Logo>My Tipaw</Logo>
      </StyledLink>
      <Controls>
        <LanguageSelector
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
        />
        <StyledBellIcon src={BellIcon} alt="Bell Icon" />
        <ProfileInfo avatar={avatar} name={name} onClick={toggleDropdown} />
        <Dropdown options={options} isOpen={isOpen} />
      </Controls>
    </HeaderWrapper>
  );
};

export default Header;
