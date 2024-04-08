// components
import Header from "../../components/header";
import Progress from "../../components/progress/progress";
import AccordionWrapper from "../../components/accordion-wrapper";
import ProfileCompletion from "../../components/profile-completion";
// types
import { FC } from "react";
import { HomeProps } from "./index.interfaces";
// assets
import RedCircleIcon from "../../../assets/icons/red-circle.svg";
// styles
import {
  Section,
  PageWrapper,
  PageSubtitle,
  AnnouncementsWrapper,
  ProfileCompletionWrapper,
} from "./index.styles";

const Home: FC<HomeProps> = ({ profile, announcements }) => (
  <PageWrapper>
    <Header name={profile.name} avatar={profile.avatar} />
    <Section>
      {profile.globalProgress && (
        <ProfileCompletionWrapper>
          <ProfileCompletion globalProgress={profile.globalProgress} />
          <Progress profileData={profile} />
        </ProfileCompletionWrapper>
      )}
    </Section>
    <Section>
      {announcements && announcements.length > 0 && (
        <AnnouncementsWrapper>
          <PageSubtitle>
            Announcements from TIPAW
            <img src={RedCircleIcon} width="10px" alt="Red Circle" />
          </PageSubtitle>
          <AccordionWrapper announcements={announcements} />
        </AnnouncementsWrapper>
      )}
    </Section>
  </PageWrapper>
);

export default Home;
