import { useEffect, useRef } from "react";

interface useLongPressConfig {
  onShortPress(): void;
  onLongPress(): void;
  delay?: number;
  disabled?: boolean;
}

const MOVE_TOLERANCE = 8; // px, same as the swipe axis lock

type PressEvent = React.MouseEvent | React.TouchEvent;

function getPoint(e: PressEvent) {
  if ("touches" in e) {
    const t = e.touches[0] ?? e.changedTouches[0];
    return { x: t.clientX, y: t.clientY };
  }
  return { x: e.clientX, y: e.clientY };
}
export function useLongPress({
  onShortPress,
  onLongPress,
  delay = 200,
  disabled = false,
}: useLongPressConfig) {
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startPos = useRef({ x: 0, y: 0 });

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

  // const longPressTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function startPress(e: PressEvent) {
    if (disabled) return;
    if (isFromInteractiveChild(e)) return;
    startPos.current = getPoint(e);
    cancelPress();
    longPressTimerRef.current = setTimeout(() => {
      longPressTimerRef.current = null;
      onLongPress();
    }, delay);
  }

  function endPress(e?: React.MouseEvent | React.TouchEvent) {
    if (disabled) return;
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

  function movePress(e: PressEvent) {
    if (!longPressTimerRef.current) return;
    const p = getPoint(e);
    const dist = Math.hypot(p.x - startPos.current.x, p.y - startPos.current.y);
    if (dist > MOVE_TOLERANCE) cancelPress(); // it's a drag, not a press
  }

  return {
    onMouseDown: startPress,
    onMouseMove: movePress,
    onMouseUp: endPress,
    onMouseLeave: cancelPress,
    onTouchStart: startPress,
    onTouchMove: movePress,
    onTouchEnd: endPress,
    onTouchCancel: cancelPress,
  };
}
