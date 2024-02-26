import { useEffect } from 'react';

const useDebounce = (
  cb: () => void,
  delay: number,
  dependencies: unknown[] = []
) => {
  useEffect(() => {
    const timer = setTimeout(cb, delay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
