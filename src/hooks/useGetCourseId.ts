import { useEffect, useRef } from 'react';

const useGetCourseId = () => {
  const idRef = useRef<string>();
  useEffect(() => {
    const { pathname } = window.location;
    const id = pathname.split('/')[2];
    idRef.current = id;
  }, []);

  return { courseId: idRef.current };
};

export default useGetCourseId;
