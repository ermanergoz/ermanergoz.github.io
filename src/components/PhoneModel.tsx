import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useLoader } from "@react-three/fiber";

const PhoneModel = () => {
    const obj = useLoader(OBJLoader, "/assets/phone.obj");
  
    return (
      <primitive
        object={obj}
        scale={[0.006, 0.006, 0.006]}
        position={[0, 0, 0]}
      />
    );
  };

  export default PhoneModel;
  