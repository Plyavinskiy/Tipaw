import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemHeading,
} from "react-accessible-accordion";
// constants
import { theme } from "../../../application/theme";
// utils
import styled from "@emotion/styled";

export const AccordionContainer = styled(Accordion)`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid ${theme.color.blue.default};
  border-radius: 9px;
`;

export const AccordionItemContainer = styled(AccordionItem)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AccordionHeading = styled(AccordionItemHeading)`
  font-weight: 600;
  border: none;
  border-radius: 8px 8px 0 0;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.color.blue.default};;
  color: ${({ theme }) => theme.color.light.default};

  &:hover {
    background-color: ${({ theme }) => theme.color.blue.lightBlue};
  }
`;

export const AccordionButton = styled(AccordionItemButton)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const AccordionText = styled(AccordionItemPanel)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  padding: 0 24px 16px 24px;
  color: ${({ theme }) => theme.color.medium.shade};
  margin: 0px;
  max-height: 350px;
  overflow: auto;

  & p {
    margin: 0;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  padding: 16px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: right;
  color: ${({ theme }) => theme.color.blue.default};
`;

export const DateText = styled.span`
  font-size: 7px;
`;
