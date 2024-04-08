// utils
import styled from "@emotion/styled";

export const ProfileCompletionStatus = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  font-size: 18px;
`;

export const ProfileCompletionStatusTitle = styled.p`
  margin: 0;
`;

export const CompletionPercentage = styled.p`
  color: ${({ theme }) => theme.color.green.default};
  font-size: 14px;
  margin: 0;
`;
