// constants
import { theme } from "../../../application/theme";
// utils
import styled from "@emotion/styled";

export const ProgressContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(244px, 1fr));
    justify-content: space-between;
    gap: 40px;
    padding: 40px;
`;

export const ProgressItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 24px;
    background: ${({ theme }) => theme.color.light.default};
    border: 1px solid ${theme.color.light.shadeLighter};
    border-radius: 4px;
    box-shadow: -1px 3px 16px rgba(149, 157, 165, 0.19);
`;

export const ProgressItemStatus = styled.img`
    width: 24px;
    height: 24px;
    border: none;
    cursor: pointer;
`;

export const ProgressItemTitle = styled.p`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    margin: 0;
`;

export const ProgressItemDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    margin: 0;
`;
