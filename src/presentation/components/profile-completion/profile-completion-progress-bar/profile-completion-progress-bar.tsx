// hooks
import { useProgress } from "../../../../hooks/useProgress";
// types
import { FC } from "react";
import { ProfileCompletionProgressBarProps } from "./profile-completion-progress-bar.interfaces";
// styles
import {
  ProfileCompletionBar,
  ProfileCompletionBarItem,
} from "./profile-completion-progress-bar.styles";

const ProfileCompletionProgressBar: FC<ProfileCompletionProgressBarProps> = ({
  globalProgress,
}) => {
  const progressArrayWithUUID = useProgress(globalProgress);

  return (
    <ProfileCompletionBar>
      {progressArrayWithUUID.map(({ id, progress }) => (
        <ProfileCompletionBarItem key={id} progress={progress} />
      ))}
    </ProfileCompletionBar>
  );
};

export default ProfileCompletionProgressBar;
