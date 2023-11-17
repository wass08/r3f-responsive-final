import {
  AccumulativeShadows,
  Environment,
  Gltf,
  RandomizedLight,
  Sky,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useRef } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { Cook } from "./Cook";
import { foodAtom, foodItems } from "./Menu";

const FOOD_SPACING = 2.5;

const FoodItem = ({ index, food }) => {
  const [foodIndex] = useAtom(foodAtom);
  const ref = useRef();
  const viewport = useThree((state) => state.viewport);

  useFrame((_, delta) => {
    const distance = index - foodIndex;
    ref.current.position.lerp(
      {
        x: distance * viewport.width,
        y: 0,
        z: 0,
      },
      delta * 4
    );
  });

  return (
    <Gltf ref={ref} src={`models/${food.model}.gltf`} position-x={index} />
  );
};

export const Experience = () => {
  const viewport = useThree((state) => state.viewport);
  const restaurantScalingFactor = Math.min(
    Math.max(window.innerWidth / 1300, 0.5),
    1.2
  );
  const chefPositionFactor = window.innerWidth / 1300;
  const isMobile = window.innerWidth < 1024; // 1024 is the breakpoint for mobile devices (LG tailwind)
  return (
    <>
      {/* RESTAURANT */}
      <group scale={restaurantScalingFactor} rotation-y={degToRad(-30)}>
        <Gltf src="models/Restaurant.glb" scale={0.18} castShadow />
        <AccumulativeShadows
          temporal
          frames={35}
          alphaTest={0.75}
          scale={10}
          position={[0, 0.01, 0]}
          color="#EFBD4E"
        >
          <RandomizedLight
            amount={4}
            radius={9}
            intensity={0.55}
            ambient={0.25}
            position={[5, 5, -10]}
          />
          <RandomizedLight
            amount={4}
            radius={5}
            intensity={0.25}
            ambient={0.55}
            position={[-5, 5, -9]}
          />
        </AccumulativeShadows>
      </group>

      {/* CHEF */}
      <group
        position-y={isMobile ? -viewport.height / 2 : -viewport.height}
        rotation-y={degToRad(15)}
      >
        <Cook
          position-x={isMobile ? 0 : 1.2 * chefPositionFactor}
          position-y={isMobile ? -1 : -0.5}
        />
      </group>

      {/* Menu */}
      <group position-y={-viewport.height * 2}>
        {foodItems.map((food, index) => (
          <FoodItem key={index} index={index} food={food} />
        ))}
      </group>

      {/* SCENE SETUP */}
      <Environment preset="sunset" />
      <Sky />
    </>
  );
};
