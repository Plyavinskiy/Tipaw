export interface HomeFormValues {}

export interface HomeData {
  announcements: AnnouncementData[];
  profile: ProfileData;
}

export interface HomeProps extends HomeData {}

export interface AnnouncementData {
  id: string;
  title: string;
  date: string;
  content: string;
}
export interface ProfileData {
  name: string;
  avatar: string;

  globalProgress: number;
  verified: boolean;
  profilePictureIsVerified: boolean;
  parentsVerified: boolean;
  litterVerified: boolean;
}
