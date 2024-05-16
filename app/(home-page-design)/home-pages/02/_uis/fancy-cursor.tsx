"use client";

import {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type AllEventMaps = HTMLElementEventMap & DocumentEventMap & WindowEventMap;

export function useEventListener<K extends keyof HTMLElementEventMap>(
  type: K,
  listener: (event: HTMLElementEventMap[K]) => void,
  element: HTMLElement,
): void;

export function useEventListener<K extends keyof DocumentEventMap>(
  type: K,
  listener: (event: DocumentEventMap[K]) => void,
  element: Document,
): void;

export function useEventListener<K extends keyof WindowEventMap>(
  type: K,
  listener: (event: WindowEventMap[K]) => void,
  element?: Window,
): void;

export function useEventListener<K extends keyof AllEventMaps>(
  type: K,
  listener: (event: AllEventMaps[K]) => void,
  element?: HTMLElement | Document | Window | null,
) {
  const listenerRef = useRef(listener);

  useEffect(() => {
    listenerRef.current = listener;
  });

  useEffect(() => {
    const el = element === undefined ? window : element;

    const internalListener = (ev: AllEventMaps[K]) => {
      return listenerRef.current(ev);
    };

    el?.addEventListener(
      type,
      internalListener as EventListenerOrEventListenerObject,
    );

    return () => {
      el?.removeEventListener(
        type,
        internalListener as EventListenerOrEventListenerObject,
      );
    };
  }, [type, element]);
}

type CursorOptions = {
  children?: ReactNode;
  color?: string;
  innerScale?: number;
  innerSize?: number;
  innerStyle?: CSSProperties;
  outerAlpha?: number;
  outerScale?: number;
  outerSize?: number;
  outerStyle?: CSSProperties;
};

type Clickable = string | ({ target: string } & CursorOptions);

type CursorProps = CursorOptions & {
  clickables?: Clickable[];
  showSystemCursor?: boolean;
  trailingSpeed?: number;
};

type CursorCoordinates = {
  x: number;
  y: number;
};

function findInArray<T>(
  arr: T[],
  callback: (element: T, index: number, array: T[]) => boolean,
  // ...args
): T | undefined {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  const list = Object(arr);
  // Makes sure it always has a positive integer as length.
  const length = list.length >>> 0;
  // const thisArg = args[2];
  const thisArg = undefined;

  for (let i = 0; i < length; i++) {
    const element = list[i];
    if (callback.call(thisArg, element, i, list)) {
      return element;
    }
  }

  return undefined;
}

// Component Definition.
export default function FancyCursor({
  clickables = [
    "a",
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="submit"]',
    'input[type="image"]',
    "label[for]",
    "select",
    "textarea",
    "button",
    ".link",
  ],
  children,
  color = "220, 90, 90",
  innerScale = 0.6,
  innerSize = 8,
  innerStyle,
  outerAlpha = 0.4,
  outerScale = 6,
  outerSize = 64,
  outerStyle,
  showSystemCursor = false,
  trailingSpeed = 8,
}: CursorProps) {
  const defaultOptions = useMemo(
    () => ({
      children,
      color,
      innerScale,
      innerSize,
      innerStyle,
      outerAlpha,
      outerScale,
      outerSize,
      outerStyle,
    }),
    [
      children,
      color,
      innerScale,
      innerSize,
      innerStyle,
      outerAlpha,
      outerScale,
      outerSize,
      outerStyle,
    ],
  );

  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  const endX = useRef(0);
  const endY = useRef(0);

  const [coords, setCoords] = useState<CursorCoordinates>({
    x: 0,
    y: 0,
  });
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [options, setOptions] = useState(defaultOptions);

  const onMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current !== null) {
      cursorInnerRef.current.style.top = `${clientY}px`;
      cursorInnerRef.current.style.left = `${clientX}px`;
    }
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  // Outer Cursor Animation Delay
  const animateOuterCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / trailingSpeed;
        coords.y += (endY.current - coords.y) / trailingSpeed;
        if (cursorOuterRef.current !== null) {
          cursorOuterRef.current.style.top = `${coords.y}px`;
          cursorOuterRef.current.style.left = `${coords.x}px`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [trailingSpeed], // eslint-disable-line
  );

  // Outer cursor RAF setup / cleanup
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animateOuterCursor]);

  /**
   * Calculates amount to scale cursor in px3
   */
  const getScaleAmount = (orignalSize: number, scaleAmount: number) => {
    return `${parseInt(String(orignalSize * scaleAmount))}px`;
  };

  // Scales cursor by HxW
  const scaleBySize = useCallback(
    (
      cursorRef: HTMLDivElement | null,
      orignalSize: number,
      scaleAmount: number,
    ) => {
      if (cursorRef) {
        cursorRef.style.height = getScaleAmount(orignalSize, scaleAmount);
        cursorRef.style.width = getScaleAmount(orignalSize, scaleAmount);
      }
    },
    [],
  );

  // Mouse Events State updates
  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnterViewport = useCallback(() => setIsVisible(true), []);
  const onMouseLeaveViewport = useCallback(() => setIsVisible(false), []);

  useEventListener("mousemove", onMouseMove);
  useEventListener("mousedown", onMouseDown);
  useEventListener("mouseup", onMouseUp);
  useEventListener("mouseover", onMouseEnterViewport);
  useEventListener("mouseout", onMouseLeaveViewport);

  // Cursors Hover/Active State
  useEffect(() => {
    if (isActive) {
      scaleBySize(
        cursorInnerRef.current,
        options.innerSize,
        options.innerScale,
      );
      scaleBySize(
        cursorOuterRef.current,
        options.outerSize,
        options.outerScale,
      );
    } else {
      scaleBySize(cursorInnerRef.current, options.innerSize, 1);
      scaleBySize(cursorOuterRef.current, options.outerSize, 1);
    }
  }, [
    options.innerSize,
    options.innerScale,
    options.outerSize,
    options.outerScale,
    scaleBySize,
    isActive,
  ]);

  // Cursors Click States
  useEffect(() => {
    if (isActiveClickable) {
      scaleBySize(
        cursorInnerRef.current,
        options.innerSize,
        options.innerScale * 1.2,
      );
      scaleBySize(
        cursorOuterRef.current,
        options.outerSize,
        options.outerScale * 1.4,
      );
    }
  }, [
    options.innerSize,
    options.innerScale,
    options.outerSize,
    options.outerScale,
    scaleBySize,
    isActiveClickable,
  ]);

  // Cursor Visibility Statea
  useEffect(() => {
    if (cursorInnerRef.current == null || cursorOuterRef.current == null)
      return;

    if (isVisible) {
      cursorInnerRef.current.style.opacity = "1";
      cursorOuterRef.current.style.opacity = "1";
    } else {
      cursorInnerRef.current.style.opacity = "0";
      cursorOuterRef.current.style.opacity = "0";
    }
  }, [isVisible]);

  // Click event state updates
  useEffect(() => {
    const clickableEls = document.querySelectorAll<HTMLElement>(
      clickables
        .map((clickable) =>
          typeof clickable === "object" && clickable?.target
            ? clickable.target
            : clickable ?? "",
        )
        .join(","),
    );

    clickableEls.forEach((el) => {
      if (!showSystemCursor) el.style.cursor = "none";

      const clickableOptions =
        typeof clickables === "object"
          ? findInArray(
              clickables,
              (clickable: Clickable) =>
                typeof clickable === "object" && el.matches(clickable.target),
            )
          : {};

      const options = {
        ...defaultOptions,
        ...clickableOptions,
      };

      el.addEventListener("mouseover", () => {
        setIsActive(true);
        setOptions(options);
      });
      el.addEventListener("click", () => {
        setIsActive(true);
        setIsActiveClickable(false);
      });
      el.addEventListener("mousedown", () => {
        setIsActiveClickable(true);
      });
      el.addEventListener("mouseup", () => {
        setIsActive(true);
      });
      el.addEventListener("mouseout", () => {
        setIsActive(false);
        setIsActiveClickable(false);
        setOptions(defaultOptions);
      });
    });

    return () => {
      clickableEls.forEach((el) => {
        const clickableOptions =
          typeof clickables === "object"
            ? findInArray(
                clickables,
                (clickable: Clickable) =>
                  typeof clickable === "object" && el.matches(clickable.target),
              )
            : {};

        const options = {
          ...defaultOptions,
          ...clickableOptions,
        };

        el.removeEventListener("mouseover", () => {
          setIsActive(true);
          setOptions(options);
        });
        el.removeEventListener("click", () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.removeEventListener("mousedown", () => {
          setIsActiveClickable(true);
        });
        el.removeEventListener("mouseup", () => {
          setIsActive(true);
        });
        el.removeEventListener("mouseout", () => {
          setIsActive(false);
          setIsActiveClickable(false);
          setOptions(defaultOptions);
        });
      });
    };
  }, [clickables, defaultOptions, showSystemCursor]);

  useEffect(() => {
    if (typeof window === "object" && !showSystemCursor) {
      document.body.style.cursor = "none";
    }
  }, [showSystemCursor]);

  // return (
  //   <div>
  //     <div
  //       ref={cursorOuterRef}
  //       className="fixed -z-10 size-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4"
  //     ></div>
  //     <div
  //       ref={cursorInnerRef}
  //       className="fixed z-20 size-1 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-foreground"
  //     ></div>
  //   </div>
  // );

  const coreStyles: CSSProperties = {
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    transition:
      "opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out",
  };

  // Cursor Styles
  const styles = {
    cursorInner: {
      width: !options.children ? options.innerSize : "auto",
      height: !options.children ? options.innerSize : "auto",
      backgroundColor: !options.children
        ? `rgba(${options.color}, 1)`
        : "transparent",
      ...coreStyles,
      ...(options.innerStyle && options.innerStyle),
    },
    cursorOuter: {
      width: options.outerSize,
      height: options.outerSize,
      backgroundColor: `rgba(${options.color}, ${options.outerAlpha})`,
      ...coreStyles,
      ...(options.outerStyle && options.outerStyle),
    },
  };

  return (
    <>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner}>
        <div
          style={{
            opacity: !options.children ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          {options.children}
        </div>
      </div>
    </>
  );
}
