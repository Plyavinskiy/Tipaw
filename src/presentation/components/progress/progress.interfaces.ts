// types
import { ProfileData } from "../../pages/home/index.interfaces";

export interface ProgressProps {
  profileData: ProfileData;
}

export interface ProgressItemData {
  title: string;
  description: string;
  completed: boolean;
}
