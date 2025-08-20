import React, { Suspense } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #0070f3;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;
`;

const LoadingText = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
  text-align: center;
`;

const ErrorText = styled.p`
  color: #dc3545;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const RetryButton = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-height: 44px;
  
  &:hover {
    background-color: #0051cc;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const PageLoader = () => (
  <LoaderContainer>
    <Spinner />
    <LoadingText>Loading page...</LoadingText>
  </LoaderContainer>
);

const ErrorFallback = ({ error, resetError }) => (
  <ErrorContainer>
    <ErrorText>
      Something went wrong while loading this page.
    </ErrorText>
    <RetryButton onClick={resetError}>
      Try Again
    </RetryButton>
  </ErrorContainer>
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Page loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback 
          error={this.state.error} 
          resetError={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    return this.props.children;
  }
}

const LazyPageLoader = ({ children }) => (
  <ErrorBoundary>
    <Suspense fallback={<PageLoader />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

export default LazyPageLoader;