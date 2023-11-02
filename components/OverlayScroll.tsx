import React, { useEffect, useLayoutEffect, useRef } from "react";

type ScrollState = {
  thumbHeight: number;
  thumbTop: number;
  scrollHeight: number;
  contentHeight: number;
};
export const calculateThumb = (
  scrollTop: number,
  scrollHeight: number,
  contentHeight: number
): ScrollState => {
  const thumbHeight = (contentHeight / scrollHeight) * contentHeight;
  const scrollPos =
    (scrollTop / (scrollHeight - contentHeight)) *
    (contentHeight - thumbHeight);

  return {
    thumbTop: scrollPos,
    thumbHeight: thumbHeight,
    scrollHeight: scrollHeight,
    contentHeight: contentHeight,
  };
};

export type OverlayScrollProps = {
  children: React.ReactNode;
  size: number;
  renderTrack: (
    elementRef: React.RefObject<HTMLElement>,
    style: React.CSSProperties
  ) => React.ReactNode;
  renderThumb: (
    elementRef: React.RefObject<HTMLElement>,
    style: React.CSSProperties,
    isDraggingThumb: boolean
  ) => React.ReactNode;
};

//1 content resize
//2 container resize`

export const OverlayScroll = (props: OverlayScrollProps) => {
  const { size, renderTrack, renderThumb } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDraggingThumb, setIsDraggingThumb] = React.useState<boolean>(false);
  const dragStartedPositionRef = useRef<number>(0);
  const dragStartedScrollTopRef = useRef<number>(0);
  const scrollStateRef = useRef<ScrollState>({
    thumbHeight: 0,
    thumbTop: 0,
    scrollHeight: 0,
    contentHeight: 0,
  });

  useEffect(() => {
    const contentElement = contentRef.current;
    const thumbElement = thumbRef.current;
    const trackElement = trackRef.current;

    if (!contentElement || !thumbElement || !trackElement) return;

    const { scrollTop, scrollHeight, clientHeight } = contentElement;
    scrollStateRef.current = calculateThumb(
      scrollTop,
      scrollHeight,
      clientHeight
    );

    const { thumbHeight, thumbTop } = scrollStateRef.current;

    const handleTrackPointerDown = (e: PointerEvent) => {
      e.preventDefault();
      const rect = contentElement.getBoundingClientRect();
      const clickPosition = e.clientY - rect.top - thumbHeight / 2; //clamp
      const clickPercentage = clickPosition / contentElement.clientHeight;
      contentElement.scrollTop = clickPercentage * scrollHeight;
    };

    const handleThumbPointerDown = (e: PointerEvent) => {
      e.preventDefault();
      setIsDraggingThumb(true);
      dragStartedPositionRef.current = e.clientY;
      dragStartedScrollTopRef.current = contentElement.scrollTop;
      console.log({
        dragStartedPositionRef: dragStartedPositionRef.current,
        dragStartedScrollTopRef: dragStartedScrollTopRef.current,
      });
    };

    const handleThumbPointerUp = () => {
      setIsDraggingThumb(false);
      dragStartedPositionRef.current = 0;
      dragStartedScrollTopRef.current = 0;
    };

    const handleThumbPointerMove = (e: PointerEvent) => {
      const contentElement = contentRef.current;
      if (isDraggingThumb && contentElement) {
        const distance = e.clientY - dragStartedPositionRef.current;
        contentElement.scrollTop =
          dragStartedScrollTopRef.current +
          (distance * scrollStateRef.current.scrollHeight) /
            contentElement.clientHeight;
      }
    };

    trackElement.addEventListener("pointerdown", handleTrackPointerDown);
    thumbElement.addEventListener("pointerdown", handleThumbPointerDown);
    document.addEventListener("pointerup", handleThumbPointerUp);
    document.addEventListener("pointermove", handleThumbPointerMove);
    thumbElement.style.top = `${thumbTop}px`;
    thumbElement.style.height = `${thumbHeight}px`;

    return () => {
      trackElement.removeEventListener("pointerdown", handleTrackPointerDown);
      thumbElement.removeEventListener("pointerdown", handleThumbPointerDown);
      document.removeEventListener("pointerup", handleThumbPointerUp);
      document.removeEventListener("pointermove", handleThumbPointerMove);
    };
  }, [isDraggingThumb, props.children]);

  const handleScroll = () => {
    if (!contentRef.current || !thumbRef.current || !trackRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    scrollStateRef.current = calculateThumb(
      scrollTop,
      scrollHeight,
      clientHeight
    );
    const { thumbHeight, thumbTop } = scrollStateRef.current;

    thumbRef.current.style.top = `${thumbTop}px`;
    thumbRef.current.style.height = `${thumbHeight}px`;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <div //content
        ref={contentRef}
        onScroll={handleScroll}
        className="hide-scroll_"
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
      >
        {props.children}
      </div>
      {renderTrack(trackRef, {
        position: "absolute",
        width: size,
        height: "100%",
        top: 0,
        bottom: 0,
      })}
      {renderThumb(
        thumbRef,
        { position: "absolute", width: size },
        isDraggingThumb
      )}
    </div>
  );
};
