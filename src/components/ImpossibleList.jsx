import styled from 'styled-components';
import { FaCheckCircle, FaClock, FaTarget } from 'react-icons/fa';

const ListContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const SectionHeader = styled.div`
  background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
  color: white;
  padding: 1rem 1.25rem;
  
  @media (min-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SectionContent = styled.div`
  padding: 1.25rem;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const GoalsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
  
  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const GoalItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: ${props => props.completed ? '#f8f9fa' : '#fff'};
  border: 1px solid ${props => props.completed ? '#28a745' : '#e9ecef'};
  border-left: 4px solid ${props => props.completed ? '#28a745' : '#ffc107'};
  border-radius: 8px;
  transition: all 0.2s ease;
  min-height: 60px;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (min-width: 768px) {
    padding: 1.25rem;
    gap: 1rem;
  }
`;

const GoalIcon = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.125rem;
  
  svg {
    font-size: 1.1rem;
    color: ${props => props.completed ? '#28a745' : '#ffc107'};
  }
`;

const GoalContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const GoalText = styled.div`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
  word-wrap: break-word;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
  
  strong {
    font-weight: 600;
    color: #222;
  }
  
  em {
    color: #666;
    font-style: italic;
    font-size: 0.9rem;
  }
  
  a {
    color: #0070f3;
    text-decoration: none;
    word-break: break-word;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubGoalsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0 0 0;
  display: grid;
  gap: 0.5rem;
`;

const SubGoalItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem;
  background: ${props => props.completed ? '#e8f5e8' : '#f8f9fa'};
  border-radius: 6px;
  border-left: 3px solid ${props => props.completed ? '#28a745' : '#6c757d'};
  font-size: 0.9rem;
  
  @media (min-width: 768px) {
    padding: 1rem;
    font-size: 0.95rem;
  }
`;

const parseImpossibleListContent = (content) => {
  const lines = content.split('\n').filter(line => line.trim());
  const sections = [];
  let currentSection = null;
  
  lines.forEach(line => {
    const trimmedLine = line.trim();
    
    // Section headers (# Title)
    if (trimmedLine.startsWith('# ')) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: trimmedLine.replace('# ', ''),
        goals: []
      };
    }
    // Goals (- text or - ✅ text)
    else if (trimmedLine.startsWith('- ')) {
      if (currentSection) {
        const goalText = trimmedLine.replace('- ', '');
        const isCompleted = goalText.includes('✅');
        const cleanText = goalText.replace('✅ ', '');
        
        // Check if this is a sub-goal (indented)
        if (line.startsWith('  - ')) {
          // Add as sub-goal to the last goal
          const lastGoal = currentSection.goals[currentSection.goals.length - 1];
          if (lastGoal) {
            if (!lastGoal.subGoals) lastGoal.subGoals = [];
            lastGoal.subGoals.push({
              text: cleanText,
              completed: isCompleted
            });
          }
        } else {
          // Add as main goal
          currentSection.goals.push({
            text: cleanText,
            completed: isCompleted,
            subGoals: []
          });
        }
      }
    }
  });
  
  if (currentSection) {
    sections.push(currentSection);
  }
  
  return sections;
};

const getSectionIcon = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('completed') || lowerTitle.includes('check-in')) {
    return <FaCheckCircle />;
  }
  if (lowerTitle.includes('current') || lowerTitle.includes('focuses')) {
    return <FaClock />;
  }
  return <FaTarget />;
};

const ImpossibleList = ({ content }) => {
  const sections = parseImpossibleListContent(content);
  
  return (
    <ListContainer>
      {sections.map((section, index) => (
        <Section key={index}>
          <SectionHeader>
            <SectionTitle>
              {getSectionIcon(section.title)}
              {section.title}
            </SectionTitle>
          </SectionHeader>
          <SectionContent>
            <GoalsList>
              {section.goals.map((goal, goalIndex) => (
                <GoalItem key={goalIndex} completed={goal.completed}>
                  <GoalIcon completed={goal.completed}>
                    {goal.completed ? <FaCheckCircle /> : <FaClock />}
                  </GoalIcon>
                  <GoalContent>
                    <GoalText dangerouslySetInnerHTML={{ __html: goal.text }} />
                    {goal.subGoals && goal.subGoals.length > 0 && (
                      <SubGoalsList>
                        {goal.subGoals.map((subGoal, subIndex) => (
                          <SubGoalItem key={subIndex} completed={subGoal.completed}>
                            <GoalIcon completed={subGoal.completed}>
                              {subGoal.completed ? <FaCheckCircle /> : <FaClock />}
                            </GoalIcon>
                            <GoalText dangerouslySetInnerHTML={{ __html: subGoal.text }} />
                          </SubGoalItem>
                        ))}
                      </SubGoalsList>
                    )}
                  </GoalContent>
                </GoalItem>
              ))}
            </GoalsList>
          </SectionContent>
        </Section>
      ))}
    </ListContainer>
  );
};

export default ImpossibleList;