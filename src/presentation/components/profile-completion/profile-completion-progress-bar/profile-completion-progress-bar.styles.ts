// constants
import { theme } from "../../../../application/theme";
// utils
import styled from "@emotion/styled";

const BAR_ITEM_WIDTH = "64px";
const BAR_ITEM_HEIGHT = "8px";
const PROGRESS_CAPACITY = 20;

const getProgressStyles = (progress: number) => `
  width: ${BAR_ITEM_WIDTH};
  height: ${BAR_ITEM_HEIGHT};
  border: 1px solid ${theme.color.green.default};
  border-radius: 2px;
  background-color: white;
  position: relative;

  &:before {
    content: "";
    display: block;
    width: calc((${progress} / ${PROGRESS_CAPACITY}) * 100%);
    height: 100%;
    background-color: ${theme.color.green.default};
    border-radius: 2px;
  }
`;

export const ProfileCompletionBarItem = styled.div<{ progress: number }>`
  ${({ progress }) => getProgressStyles(progress)}
`;

export const ProfileCompletionBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 15px;
`;
