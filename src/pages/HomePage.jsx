import styled, { keyframes } from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { PageContainer } from '../components/PageComponents';

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(108, 92, 231, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(108, 92, 231, 0.6), 0 0 40px rgba(253, 203, 110, 0.2);
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 3rem 0;
  background: ${soloLevelingTheme.colors.gradients.secondary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  box-shadow: ${soloLevelingTheme.shadows.purple};
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(108, 92, 231, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Avatar = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  background: ${soloLevelingTheme.colors.gradients.gold};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  color: ${soloLevelingTheme.colors.gradients.gold};
  animation: ${glowPulse} 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: ${soloLevelingTheme.colors.gradients.primary};
    border-radius: 50%;
    z-index: -1;
  }
`;

const Name = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  color: ${soloLevelingTheme.colors.text.primary};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  background: ${soloLevelingTheme.colors.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: ${soloLevelingTheme.colors.text.secondary};
  margin-bottom: 2rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  position: relative;
  z-index: 1;
`;

const Description = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.8;
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 1.1rem;
  position: relative;
  z-index: 1;
`;

const PostsSection = styled.section`
  margin-top: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${soloLevelingTheme.colors.text.primary};
  text-align: center;
  margin-bottom: 3rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${soloLevelingTheme.colors.gradients.gold};
    border-radius: 2px;
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PostCard = styled.article`
  background: ${soloLevelingTheme.colors.gradients.secondary};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  padding: 2rem;
  transition: all ${soloLevelingTheme.animations.transition.normal};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${soloLevelingTheme.colors.gradients.gold};
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${soloLevelingTheme.shadows.purple}, 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: ${soloLevelingTheme.colors.accent.purple};
  }
`;

const PostTitle = styled.h3`
  font-size: 1.5rem;
  color: ${soloLevelingTheme.colors.text.primary};
  margin-bottom: 1rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.semibold};
`;

const PostExcerpt = styled.p`
  color: ${soloLevelingTheme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: ${soloLevelingTheme.colors.text.muted};
`;

const ReadMoreButton = styled.button`
  background: ${soloLevelingTheme.colors.gradients.primary};
  color: ${soloLevelingTheme.colors.text.primary};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${soloLevelingTheme.borderRadius.md};
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${soloLevelingTheme.animations.transition.fast};
  
  &:hover {
    background: ${soloLevelingTheme.colors.gradients.gold};
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(253, 203, 110, 0.3);
  }
`;

const HomePage = () => {
  const featuredPosts = [
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Avatar>FC</Avatar>
        <Name>Fernando Castañeda</Name>
        <Title>Software Engineer | Dancer | Trader</Title>
        <Description>
          Welcome to my digital realm! I'm a passionate software engineer specializing in backend development with Ruby on Rails. 
          When I'm not coding, you'll find me dancing bachata and salsa, analyzing crypto markets, or exploring new technologies. 
          Join me on this journey of continuous learning and growth.
        </Description>
      </HeroSection>
      
      <PostsSection>
        <SectionTitle>Featured Posts</SectionTitle>
        <PostsGrid>
          {featuredPosts.map(post => (
            <PostCard key={post.id}>
              <PostTitle>{post.title}</PostTitle>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
              <PostMeta>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </PostMeta>
              <ReadMoreButton>Read More</ReadMoreButton>
            </PostCard>
          ))}
        </PostsGrid>
      </PostsSection>
    </PageContainer>
  );
};

export default HomePage;