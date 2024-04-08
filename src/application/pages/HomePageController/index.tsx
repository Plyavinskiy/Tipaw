// components
import Home from "../../../presentation/pages/home";
// hooks
import { useGetAnnouncements } from "./api/useGetAnnouncements";
import { useGetProfile } from "./api/useGetProfile";
// types
import type { FC } from "react";

const HomeController: FC = () => {
  const announcements = useGetAnnouncements();
  const profile = useGetProfile();

  return <Home announcements={announcements} profile={profile} />;
};

export default HomeController;
