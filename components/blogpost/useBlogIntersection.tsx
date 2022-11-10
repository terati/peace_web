import * as React from 'react';

const useInterSection = (element:any, rootMargin:any) => {
  const [isVisible, set_isVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        set_isVisible(entry.isIntersecting);
      }, { rootMargin }
    );
    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);

  }, []);

  return isVisible;
};

export default useInterSection;
