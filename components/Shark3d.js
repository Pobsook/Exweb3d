// components/ModelViewer.jsx
'use client'; // บอก Next.js ว่าไฟล์นี้รันฝั่ง client เท่านั้น (เพราะมี React hook)

import { Canvas } from '@react-three/fiber'; // Canvas ใช้สำหรับแสดงฉาก 3 มิติ
import { Environment } from '@react-three/drei'; // ตัวช่วยสำหรับการควบคุมกล้องและแสง HDRI
import Model from './model3d/robot_shark.glb'; // import คอมโพเนนต์ Model ที่ควรแยกไว้ในไฟล์อื่น

// คอมโพเนนต์หลักที่แสดงฉาก 3 มิติด้วยโมเดลที่รับตำแหน่งเป้าหมายมา
export default function ModelViewer() {
  return (
    <Canvas // ให้ canvas เต็มจอ
      camera={{ position: [0, 2, 5], fov: 50 }}   // กำหนดตำแหน่งกล้อง
    >
      <ambientLight intensity={0.5} /> {/* แสงแบบอ่อน */}
      <directionalLight position={[5, 5, 5]} /> {/* แสงจากทิศทาง */}
      <Environment preset="sunset" /> {/* ใส่สภาพแวดล้อมแบบ HDRI */}
      <Model /> {/* แสดงโมเดลพร้อมตำแหน่ง */}
    </Canvas>
  );
}