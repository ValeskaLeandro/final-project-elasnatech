import { useState, useEffect, useCallback } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { ButtonTop } from './styled';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = useCallback(() => {
    setShowButton(window.scrollY > 0);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); 

  return (
    <ButtonTop
      onClick={scrollToTop}
      className={showButton ? 'show_button' : ''}
    >
      <AiOutlineArrowUp size={20} />
    </ButtonTop>
  );
};

export default ScrollToTop;
