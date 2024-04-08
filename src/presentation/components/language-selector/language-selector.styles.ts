// utils
import styled from "@emotion/styled";

export const LanguageSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
`;

export const LanguageSelectorItem = styled.span<{ selected?: boolean }>`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  padding: 8px;
  cursor: pointer;

  color: ${({ theme, selected }) =>
    selected ? theme.color.blue.default : "inherit"};
`;

export const Divider = styled.span`
  color: ${({ theme }) => theme.color.blue.default};
`;
