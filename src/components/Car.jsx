import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";


const Car = () => {
  const gltf = useLoader(GLTFLoader,  "model/car/scene.gltf");
  useEffect(() => {
    gltf.scene.scale.set(0.005, 0.005, 0.005);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.traverse((obj) => {
      if (obj instanceof Mesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        obj.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
};

export default Car;
