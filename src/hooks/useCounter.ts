import { useState, useEffect, useRef } from 'react';

interface UseCounterOptions {
  duration?: number;
  startValue?: number;
  decimals?: number;
}

export const useCounter = (endValue: number, options: UseCounterOptions = {}) => {
  const { duration = 2000, startValue = 0, decimals = 0 } = options;
  const [count, setCount] = useState(startValue);
  const [hasStarted, setHasStarted] = useState(false);
  const countRef = useRef(startValue);
  const startTimeRef = useRef<number | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!hasStarted) return;

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = startValue + (endValue - startValue) * easeOutQuart;
      countRef.current = currentValue;
      
      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasStarted, endValue, duration, startValue]);

  const start = () => {
    setHasStarted(true);
    startTimeRef.current = null;
  };

  const reset = () => {
    setHasStarted(false);
    setCount(startValue);
    countRef.current = startValue;
    startTimeRef.current = null;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  return {
    count: decimals > 0 ? count.toFixed(decimals) : Math.round(count),
    start,
    reset,
    hasStarted
  };
};
