import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import LoaderCanvas from "../loader/Index";

function Model(props) {
  const { scene } = useGLTF("/desktop_pc/comp.gltf");
  return <primitive object={scene} {...props} />;
}

const CompModel = () => {
  return (
    <Canvas
      style={{ position: "absolute" }}
      shadows
      camera={{ position: [20, 10, 0], fov: 25 }}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      <hemisphereLight intensity={5} groundColor={"#fff"} />
      <pointLight intensity={7} />
      <spotLight position={[-20, 10, 10]} intensity={7} angle={0.12} />
      <Suspense fallback={<LoaderCanvas />}>
        <Model
          position={[0, -2.25, -1.5]}
          scale={0.8}
          rotation={[0.001, -0.2, -0.1]}
        />
      </Suspense>
    </Canvas>
  );
};

export default CompModel;
