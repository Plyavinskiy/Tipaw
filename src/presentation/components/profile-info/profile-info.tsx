// assets
import ArrowDownIcon from "../../../assets/icons/arrow-down.svg";
// types
import { FC } from "react";
import { ProfileInfoProps } from "./profile-info.interfaces";
// styles
import {
  Avatar,
  UserName,
  DownArrowIcon,
  ProfileInfoWrapper,
} from "./profile-info.styles";

const ProfileInfo: FC<ProfileInfoProps> = ({ avatar, name, onClick }) => (
  <ProfileInfoWrapper onClick={onClick}>
    <Avatar src={avatar} alt="User Avatar" />
    <UserName>{name}</UserName>
    <DownArrowIcon src={ArrowDownIcon} alt="Down Arrow Icon" />
  </ProfileInfoWrapper>
);

export default ProfileInfo;
