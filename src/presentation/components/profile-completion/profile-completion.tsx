// components
import ProfileCompletionStatus from "./profile-completion-status";
import ProfileCompletionProgressBar from "./profile-completion-progress-bar";
// assets
import PartyPopperIcon from "../../../assets/icons/party-popper.svg";
import { FC } from "react";
// types
import { ProfileCompletionProps } from "./profile-completion.interfaces";
// styles
import {
  Title,
  Description,
  PartyPopperImage,
  ProfileCompletionInfo,
  ProfileCompletionInfoItem,
} from "./profile-completion.styles";

const ProfileCompletion: FC<ProfileCompletionProps> = ({ globalProgress }) => (
  <ProfileCompletionInfo>
    <ProfileCompletionInfoItem>
      <Title>You have successfully completed your profile at Tipaw</Title>
      <Description>
        Now you can use Tipaw for 100%
        <PartyPopperImage src={PartyPopperIcon} alt="PartyPopper Icon" />
      </Description>
    </ProfileCompletionInfoItem>
    <ProfileCompletionInfoItem>
      <ProfileCompletionStatus globalProgress={globalProgress} />
      <ProfileCompletionProgressBar globalProgress={globalProgress} />
    </ProfileCompletionInfoItem>
  </ProfileCompletionInfo>
);

export default ProfileCompletion;
