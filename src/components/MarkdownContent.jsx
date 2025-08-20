import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import LazyImage from './LazyImage';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { fadeInUp } from '../styles/animations';

const MarkdownContainer = styled.div`
  line-height: 1.7;
  color: ${soloLevelingTheme.colors.text.primary};
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-family: ${soloLevelingTheme.typography.fontFamily.primary};
  animation: ${fadeInUp} 0.6s ease-out;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: ${soloLevelingTheme.colors.text.primary};
    line-height: 1.3;
    font-family: ${soloLevelingTheme.typography.fontFamily.heading};
    font-weight: 700;
    background: ${soloLevelingTheme.colors.gradients.gold};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 50px;
      height: 2px;
      background: ${soloLevelingTheme.colors.gradients.purple};
      border-radius: 2px;
    }
    
    @media (min-width: 768px) {
      margin-top: 2.5rem;
      margin-bottom: 1.25rem;
    }
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    
    &::after {
      width: 80px;
      height: 3px;
    }
    
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    
    &::after {
      width: 60px;
    }
    
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    
    &::after {
      width: 40px;
    }
    
    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 1.8;
    color: ${soloLevelingTheme.colors.text.secondary};
    
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  a {
    color: ${soloLevelingTheme.colors.accent.purple};
    text-decoration: none;
    word-break: break-word;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0;
    position: relative;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${soloLevelingTheme.colors.gradients.purple};
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: ${soloLevelingTheme.colors.accent.gold};
      text-shadow: 0 0 8px rgba(253, 203, 110, 0.5);
      
      &::after {
        width: 100%;
      }
    }
    
    &:active {
      opacity: 0.8;
      transform: translateY(1px);
    }
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    @media (min-width: 768px) {
      padding-left: 2rem;
    }
  }

  ul {
    list-style-type: none;
    
    li {
      position: relative;
      padding-left: 2rem;
      margin-bottom: 1rem;
      line-height: 1.6;
      color: ${soloLevelingTheme.colors.text.secondary};
      
      &::before {
        content: '▶';
        position: absolute;
        left: 0;
        color: ${soloLevelingTheme.colors.accent.purple};
        font-weight: bold;
        font-size: 0.8rem;
        top: 0.2rem;
      }
      
      /* Special styling for completed items */
      &:has(> :first-child:contains('✅')) {
        &::before {
          content: '';
        }
        
        padding-left: 0;
      }
    }
  }

  ol {
    li {
      margin-bottom: 1rem;
      line-height: 1.6;
      padding-left: 0.5rem;
      color: ${soloLevelingTheme.colors.text.secondary};
    }
  }

  /* Enhanced styling for task lists */
  li {
    font-size: 1rem;
    
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    
    /* Completed tasks styling */
    &:has(> :first-child:contains('✅')) {
      background: linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(40, 167, 69, 0.05));
      border-radius: 8px;
      padding: 0.75rem 1rem;
      margin-bottom: 0.75rem;
      border-left: 3px solid ${soloLevelingTheme.colors.status.success};
      box-shadow: 0 2px 8px rgba(40, 167, 69, 0.2);
      backdrop-filter: blur(10px);
      
      @media (min-width: 768px) {
        padding: 1rem 1.25rem;
      }
    }
    
    /* Pending tasks styling */
    &:not(:has(> :first-child:contains('✅'))) {
      background: linear-gradient(135deg, rgba(253, 203, 110, 0.1), rgba(253, 203, 110, 0.05));
      border-radius: 8px;
      padding: 0.75rem 1rem;
      margin-bottom: 0.75rem;
      border-left: 3px solid ${soloLevelingTheme.colors.accent.gold};
      box-shadow: 0 2px 8px rgba(253, 203, 110, 0.2);
      backdrop-filter: blur(10px);
      
      @media (min-width: 768px) {
        padding: 1rem 1.25rem;
      }
    }
  }

  blockquote {
    border-left: 4px solid ${soloLevelingTheme.colors.accent.purple};
    padding: 1.5rem;
    margin: 2rem 0;
    color: ${soloLevelingTheme.colors.text.secondary};
    background: linear-gradient(135deg, rgba(108, 92, 231, 0.1), rgba(108, 92, 231, 0.05));
    border-radius: 0 12px 12px 0;
    position: relative;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 16px rgba(108, 92, 231, 0.2);
    
    &::before {
      content: '"';
      position: absolute;
      top: -10px;
      left: 20px;
      font-size: 3rem;
      color: ${soloLevelingTheme.colors.accent.purple};
      opacity: 0.3;
      font-family: serif;
    }
    
    @media (min-width: 768px) {
      padding: 2rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin: 2rem 0;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(108, 92, 231, 0.2);
    border: 1px solid rgba(108, 92, 231, 0.2);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(108, 92, 231, 0.3);
    }
  }

  code {
    background: linear-gradient(135deg, rgba(108, 92, 231, 0.2), rgba(108, 92, 231, 0.1));
    color: ${soloLevelingTheme.colors.accent.purple};
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
    font-size: 0.9rem;
    word-break: break-all;
    border: 1px solid rgba(108, 92, 231, 0.3);
    box-shadow: 0 2px 4px rgba(108, 92, 231, 0.1);
    
    @media (min-width: 768px) {
      font-size: 0.95rem;
    }
  }

  pre {
    margin-bottom: 2rem;
    border-radius: 12px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background: linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(20, 20, 20, 0.95));
    border: 1px solid rgba(108, 92, 231, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(108, 92, 231, 0.1);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 40px;
      background: linear-gradient(90deg, rgba(108, 92, 231, 0.1), rgba(253, 203, 110, 0.1));
      border-radius: 12px 12px 0 0;
      border-bottom: 1px solid rgba(108, 92, 231, 0.2);
    }
    
    code {
      font-size: 0.85rem;
      background: transparent;
      border: none;
      box-shadow: none;
      padding: 1.5rem;
      padding-top: 3rem;
      display: block;
      
      @media (min-width: 768px) {
        font-size: 0.95rem;
      }
    }
  }

  /* Improved spacing for nested lists */
  ul ul, ol ol, ul ol, ol ul {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    background: linear-gradient(135deg, rgba(108, 92, 231, 0.05), rgba(108, 92, 231, 0.02));
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    
    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid rgba(108, 92, 231, 0.2);
    }
    
    th {
      background: linear-gradient(135deg, rgba(108, 92, 231, 0.2), rgba(108, 92, 231, 0.1));
      color: ${soloLevelingTheme.colors.text.primary};
      font-weight: 600;
    }
    
    tr:hover {
      background: rgba(108, 92, 231, 0.1);
    }
  }

  /* Better touch targets for mobile */
  @media (max-width: 767px) {
    * {
      -webkit-tap-highlight-color: rgba(108, 92, 231, 0.1);
    }
  }
`;

const MarkdownContent = ({ content }) => {
  return (
    <MarkdownContainer>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={tomorrow}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          img({ node, ...props }) {
            return <LazyImage {...props} />;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </MarkdownContainer>
  );
};

export default MarkdownContent;