import MarkdownContent from '../components/MarkdownContent';
import { nowData } from '../data/now';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper
} from '../components/PageComponents';

const NowPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>What I'm Doing Now</PageTitle>
      </PageHeader>
      <ContentWrapper>
        <MarkdownContent content={nowData} />
      </ContentWrapper>
    </PageContainer>
  );
};

export default NowPage;