import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 3px solid #0070f3;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  color: #444;
  font-size: 1.1rem;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Avatar src="https://via.placeholder.com/150" alt="Fernando Castañeda" />
      <Name>Fernando Castañeda</Name>
      <Title>Software Engineer | Dancer | Trader</Title>
      <Description>
        Welcome to my personal blog! I'm a software engineer specializing in backend development with Ruby on Rails. 
        I'm also passionate about dancing bachata and salsa, crypto trading, and continuous learning.
      </Description>
    </HomeContainer>
  );
};

export default HomePage;