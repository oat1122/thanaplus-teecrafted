import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    // Find elements with animate-on-scroll class
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    // Find elements with animate-on-load class
    const animateOnLoadElements = document.querySelectorAll(
      '.animate-on-load:not(.animate-active)'
    );

    // Immediately animate the on-load elements
    animateOnLoadElements.forEach((el) => {
      // Slight delay for smoother appearance
      setTimeout(() => {
        el.classList.add('animate-active');
      }, 100);
    });

    // Setup observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
            // Optional: Once animated, no need to observe anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // Use viewport as root
        threshold: 0.15, // Element is considered visible when 15% is visible
        rootMargin: '0px 0px -100px 0px', // Margin offset (triggers a bit earlier)
      }
    );

    // Observe scroll animation elements
    animateOnScrollElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      // Clean up observer
      if (animateOnScrollElements.length > 0) {
        animateOnScrollElements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);
}

// Helper component to wrap animated elements
export function ScrollAnimation({
  children,
  className = '',
  animationType = 'fade-up', // Options: fade-up, fade-in, slide-in, scale-in
  onLoad = false, // Whether to animate on load (true) or on scroll (false)
}: {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-in' | 'slide-in' | 'scale-in';
  onLoad?: boolean;
}) {
  let animationClass = '';
  const animationBase = onLoad ? 'animate-on-load' : 'animate-on-scroll';

  switch (animationType) {
    case 'fade-up':
      animationClass = `${animationBase} translate-y-8`;
      break;
    case 'fade-in':
      animationClass = `${animationBase} opacity-0`;
      break;
    case 'slide-in':
      animationClass = `${animationBase} -translate-x-8`;
      break;
    case 'scale-in':
      animationClass = `${animationBase} scale-95 opacity-0`;
      break;
    default:
      animationClass = `${animationBase} translate-y-8`;
  }

  return <div className={`${animationClass} ${className}`}>{children}</div>;
}
