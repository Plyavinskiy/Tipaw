// types
import { FC } from "react";
import {
  Language,
  LanguageSelectorProps,
} from "./language-selector.interfaces";
// styles
import {
  Divider,
  LanguageSelectorItem,
  LanguageSelectorWrapper,
} from "./language-selector.styles";

const LanguageSelector: FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const handleLanguageClick = (selectedLanguage: Language) => {
    onLanguageChange(selectedLanguage);
  };

  return (
    <LanguageSelectorWrapper>
      <LanguageSelectorItem
        onClick={() => handleLanguageClick(Language.French)}
        selected={currentLanguage === Language.French}
      >
        Fr
      </LanguageSelectorItem>
      <Divider>•</Divider>
      <LanguageSelectorItem
        onClick={() => handleLanguageClick(Language.Dutch)}
        selected={currentLanguage === Language.Dutch}
      >
        Nl
      </LanguageSelectorItem>
    </LanguageSelectorWrapper>
  );
};

export default LanguageSelector;
