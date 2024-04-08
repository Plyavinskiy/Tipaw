
// types
import { ProfileData } from "../../../../presentation/pages/home/index.interfaces";

export const useGetProfile = (): ProfileData => ({
  name: "John Smith",
  avatar: "https://tipaw.com/assets/Pierre-7VHVR6YF.webp",
  globalProgress: 100, // %
  litterVerified: true,
  parentsVerified: true,
  profilePictureIsVerified: true,
  verified: true,
});
