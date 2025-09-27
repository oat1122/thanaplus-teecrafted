"use client";

import React, { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";
import * as THREE from "three";

interface TShirtModelProps {
  url: string;
  color: string;
}

function TShirtModel({ url, color }: TShirtModelProps) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  // อัปเดตสีของ material เมื่อมีการเปลี่ยนแปลง
  React.useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          // สำหรับ material เดี่ยว
          if (child.material instanceof THREE.Material) {
            const material = child.material as THREE.MeshStandardMaterial;
            if (material.color) {
              material.color.set(color);
            }
          }
          // สำหรับ array ของ materials
          else if (Array.isArray(child.material)) {
            child.material.forEach((mat: THREE.MeshStandardMaterial) => {
              if (mat.color) {
                mat.color.set(color);
              }
            });
          }
        }
      });
    }
  }, [color]);

  return (
    <Center>
      {/* ปรับตำแหน่งและขนาดให้เหมาะสมกับ aspect-square */}
      <group ref={modelRef} position={[0, -0.05, 0]} scale={2.0}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}
useGLTF.preload("/3D/t_shirt.glb");

interface TShirtViewerProps {
  className?: string;
  color?: string;
}

export default function TShirtViewer({ className = "", color = "#ffffff" }: TShirtViewerProps) {
  const [currentColor, setCurrentColor] = useState(color);

  const colorOptions = [
    { name: "ขาว", value: "#ffffff" },
    { name: "ดำ", value: "#000000" },
    { name: "แดง", value: "#dc2626" },
    { name: "น้ำเงิน", value: "#2563eb" },
    { name: "เขียว", value: "#16a34a" },
    { name: "เหลือง", value: "#eab308" },
    { name: "ชมพู", value: "#ec4899" },
    { name: "เทา", value: "#6b7280" },
  ];

  return (
    <div className={["relative w-full aspect-square", className].join(" ")}>
      {/* Color picker - วางทางขวาและเรียงเป็นแถวตั้ง */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">เลือกสี</h3>
        <div className="flex flex-col gap-2">
          {colorOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setCurrentColor(option.value)}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                currentColor === option.value
                  ? "border-gray-800 scale-110 shadow-md"
                  : "border-gray-300 hover:border-gray-500"
              }`}
              style={{ backgroundColor: option.value }}
              title={option.name}
            />
          ))}
        </div>
      </div>

      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 2.8], fov: 28 }} // ปรับระยะและ fov ให้เหมาะสมกับ aspect-square
        style={{ position: "absolute", inset: 0, background: "transparent" }}
      >
        {/* ปรับแสงให้นุ่มและสม่ำเสมอ เพื่อให้ดูเป็นเสื้อยืดมากขึ้น */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 3, 4]} intensity={0.8} />
        <directionalLight position={[-2, 2, 3]} intensity={0.6} />
        <Suspense fallback={null}>
          <TShirtModel url="/3D/t_shirt.glb" color={currentColor} />
          {/* ใช้ environment ที่นุ่มกว่า */}
          <Environment preset="city" />
        </Suspense>

        {/* หมุนเองซ้าย→ขวา, ไม่ให้ซูมหรือแพน, ล็อกให้หมุนแนวนอน */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.6}      // ถ้าหมุนทิศกลับกันให้เปลี่ยนเป็น -0.6
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </div>
  );
}
