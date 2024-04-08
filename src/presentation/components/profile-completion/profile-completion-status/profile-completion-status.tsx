// types
import { FC } from "react";
import { ProfileCompletionStatusProps } from "./profile-completion-status.interfaces";
// styles
import {
  CompletionPercentage,
  ProfileCompletionStatus,
  ProfileCompletionStatusTitle,
} from "./profile-completion-status.styles";

const ProfileCompletionStatusComponent: FC<ProfileCompletionStatusProps> = ({
  globalProgress,
}) => (
  <ProfileCompletionStatus>
    <ProfileCompletionStatusTitle>
      Profile completion status
    </ProfileCompletionStatusTitle>
    <CompletionPercentage>{`${globalProgress}%`}</CompletionPercentage>
  </ProfileCompletionStatus>
);

export default ProfileCompletionStatusComponent;
