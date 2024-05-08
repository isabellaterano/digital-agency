import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import backgroundImage from "../assets/images/hero.jpg"; // Import your background image
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";

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
      <Sphere args={[1.6, 10, 10]} color={"#a855f7"} />
      <OrbitControls enableZoom={false} />
    </>
  );
};

const Hero = () => {
  return (
    <section
      className="min-h-dvh w-full relative flex flex-col md:flex-row gradient "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "95%",
      }}
    >
      <div className="flex-1 md:w-1/2 relative">
        <div className="flex flex-col   mx-3 md:ml-32 md:mt-20">
          <h1 className="text-4xl md:text-5xl mt-24 text-center pb-8 font-bold md:text-left">
            Elevating your digital presence,
            <br /> one pixel at a time.
          </h1>
          <p className="text-xl font-bold mb-3 leading-relaxed ">
            Welcome to our digital agency, where we specialize in crafting
            seamless digital experiences through expert UI/UX design,
            development, and marketing solutions.
          </p>
          <Link
            to={"/contact"}
            className="block mt-4 md:inline-block md:mt-2 mr-4 bg-[--primary-color] hover:opacity-75 px-4 py-3 rounded-sm text-purple-100 text-center w-40"
          >
            Talk To Us
            <ArrowUpRight
              size={24}
              color="#fff"
              weight="duotone"
              className="inline-flex ml-2"
            />
          </Link>
        </div>
      </div>

      <div className="flex-1 md:w-1/2">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
