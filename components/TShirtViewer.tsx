"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";

function TShirtModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return (
    <Center>
      {/* ขยายให้ใหญ่ขึ้น + ขยับลงเล็กน้อยกันหัวโดนตัด */}
      <group position={[0, -0.12, 0]} scale={2.2}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}
useGLTF.preload("/3D/t_shirt.glb");

export default function TShirtViewer({ className = "" }: { className?: string }) {
  return (
    <div className={["relative w-full aspect-[4/3] overflow-hidden", className].join(" ")}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 2.6], fov: 30 }} // เข้าใกล้ + fov แคบลง => ตัวใหญ่ขึ้น
        style={{ position: "absolute", inset: 0, background: "transparent" }}
      >
        {/* แสงนุ่ม ๆ พอให้เห็นทรง ไม่ใส่เงาพื้น */}
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 5, 5]} intensity={1.25} />
        <Suspense fallback={null}>
          <TShirtModel url="/3D/t_shirt.glb" />
          <Environment preset="studio" />
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
