import { useEffect, useState } from "react";

export function useCountUp(end: number, duration = 1500, start = 0) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;

      const value = Math.min(
        start + (end - start) * (progress / duration),
        end
      );

      setCount(Number(value.toFixed(1)));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}