import { useEffect, useRef } from "react";

interface useLongPressConfig {
  onShortPress(): void;
  onLongPress(): void;
  delay?: number;
}

export function useLongPress({
  onShortPress,
  onLongPress,
  delay = 200,
}: useLongPressConfig) {
  useEffect(() => {
    return () => {
      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current);
        longPressTimerRef.current = null;
      }
    };
  }, []);

  function isFromInteractiveChild(e: React.SyntheticEvent) {
    const target = e.target as HTMLElement;
    const current = e.currentTarget as HTMLElement;
    const interactive = target.closest("button, a, input, select, textarea");
    return (
      !!interactive && interactive !== current && current.contains(interactive)
    );
  }

  const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // const longPressTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function startPress(e: React.MouseEvent | React.TouchEvent) {
    if (isFromInteractiveChild(e)) return;
    if (e && e.type === "touchstart") {
      e.preventDefault();
    }
    longPressTimerRef.current = setTimeout(() => {
      onLongPress();
      longPressTimerRef.current = null;
    }, delay);
  }

  function endPress(e?: React.MouseEvent | React.TouchEvent) {
    if (e && isFromInteractiveChild(e)) return;
    if (e && e.type === "touchend") {
      e.preventDefault();
    }
    if (longPressTimerRef.current) {
      onShortPress();
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }

  function cancelPress() {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }

  function cancelPressOnScroll() {
    clearTimeout(longPressTimerRef.current || undefined);
    longPressTimerRef.current = null;
  }

  return {
    onMouseDown: startPress,
    onMouseUp: endPress,
    onMouseLeave: cancelPress,
    onTouchStart: startPress,
    onTouchEnd: endPress,
    onTouchMove: cancelPressOnScroll,
  };
}
