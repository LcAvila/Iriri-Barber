import { useRef, useState, useEffect } from 'react';

interface SwipeContainerProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
}

export const SwipeContainer = ({ 
  children, 
  onSwipeLeft, 
  onSwipeRight, 
  threshold = 50 
}: SwipeContainerProps) => {
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const [swipeTransform, setSwipeTransform] = useState<number>(0);

  const minSwipeDistance = threshold;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = 0;
    touchStartX.current = e.targetTouches[0].clientX;
    isDragging.current = true;
    setSwipeTransform(0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.targetTouches[0].clientX;
    
    // Adicionar feedback visual durante o swipe
    const currentX = e.targetTouches[0].clientX;
    const diff = currentX - touchStartX.current;
    setSwipeTransform(diff * 0.3); // Reduz o movimento para feedback sutil
  };

  const onTouchEnd = () => {
    if (!isDragging.current || !touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    } else if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }

    // Resetar transform
    setSwipeTransform(0);
    isDragging.current = false;
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="w-full h-full touch-none"
      style={{ touchAction: 'pan-y' }}
    >
      <div 
        className="w-full h-full transition-transform duration-200 ease-out"
        style={{ transform: `translateX(${swipeTransform}px)` }}
      >
        {children}
      </div>
    </div>
  );
};
