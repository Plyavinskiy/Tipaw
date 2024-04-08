// utils
import styled from "@emotion/styled";

export const PageWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.font.default};
    background-color: ${({ theme }) => theme.color.light.tint};
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 24px;
    margin-top: 10px;
`;

export const PageSubtitle = styled.p`
    display: flex;
    flex-direction: row;
    gap: 15px;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    margin: 0;
    color: ${({ theme }) => theme.color.blue.default};
`;

export const ProfileCompletionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: normal;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.light.default};
    border: 1px solid ${({ theme }) => theme.color.light.shadeLighter};
    border-radius: 4px;
`;

export const AnnouncementsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    background: ${({ theme }) => theme.color.light.default};
    border: 1px solid ${({ theme }) => theme.color.light.shadeLighter};
    border-radius: 4px;
`;
