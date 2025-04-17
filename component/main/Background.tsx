"use client";
import React, {useState, useRef, Suspense} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {Points, PointMaterial, Preload} from '@react-three/drei';
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const Background = (props: any) => {
    const ref: any = useRef();
    const [sphere] = useState(() => 
    random.inSphere(new Float32Array(5000), { radius: 2.8 })
    
);
useFrame((state, delta) => {
    if (!ref.current) return;
  
    const positions = ref.current.geometry.attributes.position.array;
  
    for (let i = 0; i < positions.length; i += 3) {
      // i+1 adalah posisi Y
      positions[i + 1] -= delta * 0.2; // kecepatan jatuh
  
      // Reset ke atas kalau sudah di bawah
      if (positions[i + 1] < -1) {
        positions[i + 1] = 1.2;
      }
    }
  
    // ref.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 5]}>
        <Points 
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="#fff"
                size={0.005}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>

    </group>
  )
};

const StarsCanvas = () => (
    <div className='w-full h-auto fixed inset-0 z-[20]'>
        <Canvas camera={{position: [0, 0, 1]}}>
            <Suspense fallback={null}>
                <Background/>
            </Suspense>

        </Canvas>
    </div>
);

export default StarsCanvas;
