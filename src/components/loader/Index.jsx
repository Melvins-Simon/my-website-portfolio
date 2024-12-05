import { Html, useProgress } from "@react-three/drei";

const LoaderCanvas = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="text-white font-[500] text-sm">
        Loading...{progress.toFixed(2)}%
      </span>
    </Html>
  );
};

export default LoaderCanvas;
