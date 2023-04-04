'use client';

const checkClickOutsideRef = (
  event: MouseEvent,
  ref: { current: HTMLDivElement | null },
): boolean =>
  !!(ref.current && !ref.current.contains(event.target as HTMLDivElement));

export default checkClickOutsideRef;
