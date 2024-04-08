// utils
import styled from '@emotion/styled';

export const ProfileInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.color.medium.shade};

  @media (max-width: 440px) {
    display: none;
  }
`;

export const DownArrowIcon = styled.img`
  width: 24px;
  height: 24px;
  padding: 14px;
`;
