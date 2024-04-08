import { Link } from "react-router-dom";
// utils
import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.color.light.default};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.blue.violet};
  margin: 0;
`;

export const Logo = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.color.black.default};
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > :last-child {
    margin-right: -16px;
  }
`;

export const StyledBellIcon = styled.img`
  padding: 12px;
  cursor: pointer;
`;
