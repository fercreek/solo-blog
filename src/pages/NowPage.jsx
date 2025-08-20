import MarkdownContent from '../components/MarkdownContent';
import { nowData } from '../data/now';
import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

const NowPage = () => {
  return (
    <div>
      <PageTitle>What I'm Doing Now</PageTitle>
      <MarkdownContent content={nowData} />
    </div>
  );
};

export default NowPage;