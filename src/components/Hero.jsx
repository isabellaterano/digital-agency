import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import backgroundImage from "../assets/images/hero.jpg"; // Import your background image

const Sphere = ({ position, args, color }) => {
  const ref = useRef();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta, frame) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.2 : 1}
    >
      <sphereGeometry args={args} />
      <meshStandardMaterial color={isHovered ? "#fff" : "#a78bfa"} wireframe />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <directionalLight position={[0, 1, 2]} color={"#a855f7"} />

      <ambientLight intensity={0.5} />
      <Sphere position={[0, -0.5, 0]} args={[1.5, 10, 10]} color={"#a855f7"} />
      <OrbitControls enableZoom={false} />
    </>
  );
};

const Hero = () => {
  return (
    <section
      className="min-h-dvh w-full h-full relative bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-center">
        <div className="absolute p-32">
          <h1 className="text-center text-2xl font-black italic tracking-wider md:text-5xl uppercase bg-slate-50 p-1 md:p-2 rounded-sm">
            We are FORGE
          </h1>
        </div>

        <Canvas>
          <Scene />
        </Canvas>
      </div>

      <p className="text-center mt-[-50px] text-xl md:text-xl font-bold bg-zinc-100 p-2 rounded-sm">
        We specialize in UI/UX design, development, and marketing solutions.
      </p>
    </section>
  );
};

export default Hero;
