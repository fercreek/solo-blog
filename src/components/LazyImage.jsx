import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background-color: #f8f9fa;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: opacity 0.3s ease;
  opacity: ${props => props.loaded ? 1 : 0};
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  color: #6c757d;
  font-size: 0.9rem;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const LazyImage = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <ImageContainer ref={imgRef} {...props}>
      {inView && (
        <Image
          src={src}
          alt={alt}
          loaded={loaded}
          onLoad={handleLoad}
          loading="lazy"
        />
      )}
      <Placeholder show={!loaded}>
        {loaded ? '' : 'Loading...'}
      </Placeholder>
    </ImageContainer>
  );
};

export default LazyImage;