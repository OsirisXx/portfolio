import { useState, useEffect } from 'react';

const useTypewriter = (texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(prev => currentFullText.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return currentText;
};

export default useTypewriter;
