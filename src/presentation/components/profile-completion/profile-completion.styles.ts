// utils
import styled from "@emotion/styled";

export const ProfileCompletionInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.light.shadeLighter};

  @media (max-width: 940px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

export const ProfileCompletionInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  text-align: left;

  @media (max-width: 940px) {
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.p`
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  color: ${({ theme }) => theme.color.blue.default};
`;

export const Description = styled.div`
  display: flex;
  gap: 5px;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.color.dark.shade};

  @media (max-width: 440px) {
    font-size: 12px;
  }
`;

export const PartyPopperImage = styled.img`
  width: 14px;
  margin-bottom: 2px
`;
