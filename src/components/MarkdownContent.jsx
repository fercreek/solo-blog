import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import LazyImage from './LazyImage';

const MarkdownContainer = styled.div`
  line-height: 1.6;
  color: #333;
  word-wrap: break-word;
  overflow-wrap: break-word;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
    color: #222;
    line-height: 1.3;
    
    @media (min-width: 768px) {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }
  }

  h1 {
    font-size: 1.5rem;
    border-bottom: 2px solid #eee;
    padding-bottom: 0.5rem;
    
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.25rem;
    
    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 0.95rem;
    
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  a {
    color: #0070f3;
    text-decoration: none;
    word-break: break-word;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0;
    
    &:hover {
      text-decoration: underline;
    }
    
    &:active {
      opacity: 0.7;
    }
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.25rem;
    
    @media (min-width: 768px) {
      padding-left: 2rem;
    }
  }

  ul {
    list-style-type: none;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;
      line-height: 1.5;
      
      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: #0070f3;
        font-weight: bold;
        font-size: 1.1rem;
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
      margin-bottom: 0.75rem;
      line-height: 1.5;
      padding-left: 0.5rem;
    }
  }

  /* Enhanced styling for task lists */
  li {
    font-size: 0.95rem;
    
    @media (min-width: 768px) {
      font-size: 1rem;
    }
    
    /* Completed tasks styling */
    &:has(> :first-child:contains('✅')) {
      background-color: #f8f9fa;
      border-radius: 6px;
      padding: 0.5rem 0.75rem;
      margin-bottom: 0.5rem;
      border-left: 3px solid #28a745;
      
      @media (min-width: 768px) {
        padding: 0.75rem 1rem;
      }
    }
    
    /* Pending tasks styling */
    &:not(:has(> :first-child:contains('✅'))) {
      background-color: #fff;
      border-radius: 6px;
      padding: 0.5rem 0.75rem;
      margin-bottom: 0.5rem;
      border-left: 3px solid #ffc107;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      
      @media (min-width: 768px) {
        padding: 0.75rem 1rem;
      }
    }
  }

  blockquote {
    border-left: 4px solid #0070f3;
    padding-left: 1rem;
    margin: 1rem 0;
    color: #666;
    background-color: #f8f9fa;
    border-radius: 0 4px 4px 0;
    padding: 1rem;
    
    @media (min-width: 768px) {
      padding: 1.25rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 1rem 0;
  }

  code {
    background-color: #f4f4f4;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.85rem;
    word-break: break-all;
    
    @media (min-width: 768px) {
      font-size: 0.9rem;
    }
  }

  pre {
    margin-bottom: 1rem;
    border-radius: 4px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    
    code {
      font-size: 0.8rem;
      
      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }

  /* Improved spacing for nested lists */
  ul ul, ol ol, ul ol, ol ul {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  /* Better touch targets for mobile */
  @media (max-width: 767px) {
    * {
      -webkit-tap-highlight-color: rgba(0, 112, 243, 0.1);
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