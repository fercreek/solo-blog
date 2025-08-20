import ImpossibleList from '../components/ImpossibleList';
import { impossibleListData } from '../data/impossible-list';
import { PageContainer, PageHeader, PageTitle, ContentWrapper, PageDescription } from '../components/PageComponents';

const ImpossibleListPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Impossible List</PageTitle>
        <PageDescription>
          Inspired by <a href="https://impossiblehq.com/impossible-list/" target="_blank" rel="noopener noreferrer">Joel Runyon's Impossible List</a>, 
          this is my collection of goals that push me beyond my comfort zone.
        </PageDescription>
      </PageHeader>
      <ContentWrapper>
        <ImpossibleList content={impossibleListData} />
      </ContentWrapper>
    </PageContainer>
  );
};

export default ImpossibleListPage;