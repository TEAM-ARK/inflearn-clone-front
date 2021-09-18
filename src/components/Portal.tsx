import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  children: React.ReactNode;
  selector: string;
}

export default function Portal({ children, selector }: IProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return mounted ? createPortal(children, document.querySelector(selector)!) : null;
}
