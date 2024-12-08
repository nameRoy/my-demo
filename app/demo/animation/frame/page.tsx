"use client";

import { useEffect, useState } from "react";
import FrameAnimation from "./components/frame-animation";

export default function Frame() {
  const [frames, setFrames] = useState<string[]>([]);
  const [duration, setDuration] = useState<number>(0);
  useEffect(() => {
    const frames: string[] = [];
    const promises: Promise<unknown>[] = [];
    let duration = 0;
    for (let i = 100; i <= 135; i++) {
      promises.push(
        import(`./assets/${i}.jpg`).then((image) => frames.push(image.default))
      );
      duration += 30;
    }
    Promise.all(promises).then(() => {
      setDuration(duration);
      setFrames(frames);
    });
  }, []);

  return (
    <FrameAnimation
      width={375}
      height={700}
      frames={frames}
      duration={`${duration}ms`}
      repeat={false}
    />
  );
}
