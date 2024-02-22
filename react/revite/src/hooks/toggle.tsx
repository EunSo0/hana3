import { useState } from 'react';

export const useToggle = (defaultFlag: boolean = false) => {
  const [flag, setFlag] = useState(defaultFlag);

  const makeToggle = () => setFlag(!flag);

  return [flag, makeToggle] as const;
};
