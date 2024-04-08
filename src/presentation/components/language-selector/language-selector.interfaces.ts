export enum Language {
  French = "Fr",
  Dutch = "Nl",
}

export interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}
