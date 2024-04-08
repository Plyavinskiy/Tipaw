// utils
import styled from "@emotion/styled";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  transform: translateY(18px) translateX(-16px);
  background-color: ${({ theme }) => theme.color.light.default};
  border: 1px solid ${({ theme }) => theme.color.light.grey};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DropdownOption = styled.div`
  padding: 9px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.light.shadeLighter};
  }
`;
