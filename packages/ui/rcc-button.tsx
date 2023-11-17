'use client';

export function RccButton({
  className
}: {
  className?: string;
}): JSX.Element {
  return (
    <button
      className={className}
      type='button'
    >
      Rendered Client Side
    </button>
  );
}
