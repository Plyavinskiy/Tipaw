// assets
import VerificationIcon from "../../../assets/icons/verification.svg";
// types
import { FC } from "react";
import { ProgressProps, ProgressItemData } from "./progress.interfaces";
// styles
import {
  ProgressItem,
  ProgressContainer,
  ProgressItemTitle,
  ProgressItemStatus,
  ProgressItemDescription,
} from "./progress.styles";

const Progress: FC<ProgressProps> = ({ profileData }) => {
  const progressData: ProgressItemData[] = [
    {
      title: "Verification",
      description: "You verified your account",
      completed: profileData.verified,
    },
    {
      title: "Profile picture",
      description: "You added your profile picture",
      completed: profileData.profilePictureIsVerified,
    },
    {
      title: "Parents",
      description: "You added the parents",
      completed: profileData.parentsVerified,
    },
    {
      title: "Litter",
      description: "Your created the litter",
      completed: profileData.litterVerified,
    },
  ];

  return (
    <ProgressContainer>
      {progressData.map(
        (item, index) =>
          item.completed && (
            <ProgressItem key={index}>
              <ProgressItemStatus
                src={VerificationIcon}
                alt={`${item.title} Icon`}
              />
              <ProgressItemTitle>{item.title}</ProgressItemTitle>
              <ProgressItemDescription>
                {item.description}
              </ProgressItemDescription>
            </ProgressItem>
          )
      )}
    </ProgressContainer>
  );
};

export default Progress;
