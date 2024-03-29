import React from 'react';

export default function useDebounce(fn: any, delay: number) {
  const timeoutRef = React.useRef(null);
  function debounceFn(...args) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }
  return debounceFn;
}
