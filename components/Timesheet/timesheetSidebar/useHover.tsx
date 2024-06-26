import * as React from 'react';

export default function useHover() {
  const [hovering, setHovering] = React.useState<boolean>(false);
  const [hoverTime, setHoverTime] = React.useState<number>();
  const previousNode = React.useRef<HTMLElement | null>(null);
  let timeoutRef = React.useRef<NodeJS.Timeout | null>(null); 

  const handleMouseEnter = React.useCallback(() => {
    timeoutRef.current = setTimeout(() => setHovering(true), 50);
  }, [])

  const handleMouseLeave = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovering(false);
  }, [])

  const customRef = React.useCallback(
    (node: HTMLElement | null) => {
      if (previousNode.current?.nodeType === Node.ELEMENT_NODE) {
        previousNode.current.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        previousNode.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        )
      }
      if (node?.nodeType === Node.ELEMENT_NODE) {
        node.addEventListener("mouseenter", handleMouseEnter);
        node.addEventListener("mouseleave", handleMouseLeave);
      }
      previousNode.current = node;
    }, [handleMouseEnter, handleMouseLeave]
  )

  return [customRef, hovering]
}