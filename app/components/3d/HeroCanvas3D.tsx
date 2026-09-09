'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse rotation
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Central Icosahedron Wireframe with Emerald Glow
    const icoGeometry = new THREE.IcosahedronGeometry(5.2, 1);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0x00bf8f,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x004d39,
      emissiveIntensity: 0.5
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    worldGroup.add(icoMesh);

    // 2. Inner Glowing Core Sphere
    const innerGeo = new THREE.SphereGeometry(3.2, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x1cd8d2,
      roughness: 0.1,
      metalness: 0.8,
      wireframe: false,
      transparent: true,
      opacity: 0.45,
      emissive: 0x00bf8f,
      emissiveIntensity: 0.7
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    worldGroup.add(innerCore);

    // 3. Orbital Particles Cloud
    const particleCount = 700;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00bf8f); // Emerald
    const color2 = new THREE.Color(0x1cd8d2); // Cyan
    const color3 = new THREE.Color(0x00f5a0); // Mint

    for (let i = 0; i < particleCount; i++) {
      const radius = 6.5 + Math.random() * 5.5;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(theta);

      const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    worldGroup.add(particles);

    // 4. Outer Ring Structure
    const ringGeo = new THREE.TorusGeometry(8.5, 0.05, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00bf8f,
      transparent: true,
      opacity: 0.4
    });
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh1.rotation.x = Math.PI / 3;
    worldGroup.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = Math.PI / 6;
    worldGroup.add(ringMesh2);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00bf8f, 3, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x1cd8d2, 2.5, 50);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;
    let windowHalfX = container.clientWidth / 2;
    let windowHalfY = container.clientHeight / 2;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      targetX = (clientX - windowHalfX) * 0.0015;
      targetY = (clientY - windowHalfY) * 0.0015;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      windowHalfX = container.clientWidth / 2;
      windowHalfY = container.clientHeight / 2;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Constant auto-rotation
      icoMesh.rotation.x = elapsedTime * 0.25;
      icoMesh.rotation.y = elapsedTime * 0.35;

      innerCore.rotation.y = -elapsedTime * 0.4;

      particles.rotation.y = elapsedTime * 0.12;
      particles.rotation.x = elapsedTime * 0.08;

      ringMesh1.rotation.z = elapsedTime * 0.2;
      ringMesh2.rotation.z = -elapsedTime * 0.15;

      // Smooth inertia towards mouse
      worldGroup.rotation.y += (targetX - worldGroup.rotation.y) * 0.06;
      worldGroup.rotation.x += (targetY - worldGroup.rotation.x) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] flex items-center justify-center">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#00bf8f]/15 blur-[90px] animate-pulse" />
        <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full bg-[#1cd8d2]/15 blur-[80px]" />
      </div>

      {/* Three.js canvas container */}
      <div ref={mountRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Floating 3D status badge */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-10">
        <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2.5 text-xs font-semibold tracking-wider text-[var(--foreground)] shadow-lg shadow-black/40">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bf8f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00bf8f]"></span>
          </span>
          <span className="text-gradient">Interactive 3D WebGL Core</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#00bf8f]/15 text-[#00bf8f]">Three.js</span>
        </div>
      </div>
    </div>
  );
}
