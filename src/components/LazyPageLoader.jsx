import React, { Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import Button from './Button';

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
  background: ${soloLevelingTheme.colors.gradients.secondary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  box-shadow: 0 0 30px rgba(108, 92, 231, 0.2);
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 3px solid ${soloLevelingTheme.colors.border.primary};
  border-top-color: ${soloLevelingTheme.colors.accent.purple};
  border-right-color: ${soloLevelingTheme.colors.accent.gold};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;
  box-shadow: 0 0 20px rgba(108, 92, 231, 0.3);
`;

const LoadingText = styled.p`
  color: ${soloLevelingTheme.colors.text.muted};
  font-size: 0.9rem;
  margin: 0;
  font-family: ${soloLevelingTheme.typography.fontFamily.primary};
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
  text-align: center;
  background: ${soloLevelingTheme.colors.gradients.secondary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
`;

const ErrorText = styled.p`
  color: ${soloLevelingTheme.colors.status.error};
  font-size: 1rem;
  margin-bottom: 1rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.primary};
`;

const PageLoader = () => (
  <LoaderContainer>
    <Spinner />
    <LoadingText>Loading page...</LoadingText>
  </LoaderContainer>
);

const ErrorFallback = ({ resetError }) => (
  <ErrorContainer>
    <ErrorText>
      Something went wrong while loading this page.
    </ErrorText>
    <Button variant="primary" onClick={resetError}>
      Try Again
    </Button>
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
