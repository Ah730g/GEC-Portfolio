declare module "react-pageflip" {
  import * as React from "react";

  interface HTMLFlipBookProps {
    width?: number;
    height?: number;
    size?: "fixed" | "stretch";
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    maxShadowOpacity?: number;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    className?: string;
    children?: React.ReactNode;
    onFlip?: (e: { data: number }) => void;
  }

  export default class HTMLFlipBook extends React.Component<HTMLFlipBookProps> {
    pageFlip?: {
      flipNext: () => void;
      flipPrev: () => void;
      getCurrentPageIndex: () => number;
    };
  }
}
