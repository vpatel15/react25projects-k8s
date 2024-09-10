import React, { useEffect } from 'react';

const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const callback = (event) => {
      if (!ref.current || ref.current.contains(event.target)){
        return;
      }
      handler();
    }
    document.addEventListener('mousedown', (e) => callback(e));
    document.addEventListener('touchstart', (e) => callback(e));
    return () => {
      document.removeEventListener('mousedown', () => {});
      document.removeEventListener('touchstart', () => {});
    }
  }, [ref, handler])
}

export default useOutsideClick;