import AboutContent from "../components/AboutContent";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper,
  PageDescription,
} from "../components/PageComponents";

const AboutPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>About Me</PageTitle>
        <PageDescription>
          Discover my journey through code, dance, and digital innovation
        </PageDescription>
      </PageHeader>
      <ContentWrapper>
        <AboutContent />
      </ContentWrapper>
    </PageContainer>
  );
};

export default AboutPage;
