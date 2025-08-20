import ImpossibleList from '../components/ImpossibleList';
import { impossibleListData } from '../data/impossible-list';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
  font-weight: 700;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const PageDescription = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
`;

const ImpossibleListPage = () => {
  return (
    <PageContainer>
      <PageTitle>My Impossible List</PageTitle>
      <PageDescription>
        Inspired by <a href="https://impossiblehq.com/impossible-list/" target="_blank" rel="noopener noreferrer">Joel Runyon's Impossible List</a>, 
        this is my ever-evolving list of goals that push me beyond my comfort zone.
      </PageDescription>
      <ImpossibleList content={impossibleListData} />
    </PageContainer>
  );
};

export default ImpossibleListPage;