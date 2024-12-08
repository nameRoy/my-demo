"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import styles from "./frame-animation.module.css";

interface FrameAnimationProps {
  frames: string[];
  width: number;
  height: number;
  duration?: string;
  repeat?: boolean;
}

export default function FrameAnimation({
  frames,
  width,
  height,
  duration = "1s",
  repeat = true,
}: FrameAnimationProps) {
  const [frameStatus, setFrameStatus] = useState(() => frames.map(() => false));
  const allLoaded = frameStatus.every((status) => status);
  return (
    <div
      className={clsx("relative", "overflow-hidden")}
      style={
        {
          width: width,
          height: height,
          "--frames-count": frames.length,
          "--frame-width": `${width}px`,
          "--frame-height": `${height}px`,
        } as React.CSSProperties
      }>
      <div
        className={clsx({
          [styles.frameAnimation]: allLoaded,
        })}
        style={{
          animationDuration: duration,
          animationIterationCount: repeat ? "infinite" : 1,
        }}>
        {frames.map((frame, index) => (
          <Image
            key={index}
            onLoad={() => {
              setFrameStatus((prev) => {
                prev[index] = true;
                return [...prev];
              });
            }}
            src={frame}
            alt="index"
            width={width}
            height={height}
            loading="eager"
            priority={true}
          />
        ))}
      </div>
    </div>
  );
}
