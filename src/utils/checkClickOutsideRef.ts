"use client";

export const checkClickOutsideRef = (
  event: MouseEvent,
  ref: { current: HTMLDivElement | null }
): boolean => {
  return !!(
    ref.current && !ref.current.contains(event.target as HTMLDivElement)
  );
};
