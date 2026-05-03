import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroVisualizationProps {
  index: number;
}

export const HeroVisualization: React.FC<HeroVisualizationProps> = ({ index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const objectsRef = useRef<THREE.Object3D[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00d4ff, 1.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xaa00ff, 1);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Create different visualizations based on index
    const createVisualization = (type: number) => {
      // Clear previous objects
      objectsRef.current.forEach(obj => scene.remove(obj));
      objectsRef.current = [];

      if (type === 0) {
        // Floating neural network nodes
        const nodeGeometry = new THREE.IcosahedronGeometry(0.15, 4);
        const nodeMaterial = new THREE.MeshPhongMaterial({
          color: 0x00d4ff,
          emissive: 0x00d4ff,
          emissiveIntensity: 0.5,
          wireframe: false,
        });

        const nodes: THREE.Mesh[] = [];
        for (let i = 0; i < 12; i++) {
          const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
          const angle = (i / 12) * Math.PI * 2;
          const radius = 2.5;
          node.position.set(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius * 0.6,
            Math.sin(angle * 2) * 1.5
          );
          node.userData = {
            originalPosition: node.position.clone(),
            angle: angle,
            speed: 0.5 + Math.random() * 0.5,
          };
          scene.add(node);
          nodes.push(node);
          objectsRef.current.push(node);
        }

        // Connect nodes with lines
        const lineGeometry = new THREE.BufferGeometry();
        const positions: number[] = [];
        nodes.forEach((node, i) => {
          const nextNode = nodes[(i + 1) % nodes.length];
          positions.push(node.position.x, node.position.y, node.position.z);
          positions.push(nextNode.position.x, nextNode.position.y, nextNode.position.z);
        });
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.3 });
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);
        objectsRef.current.push(lines);

        // Animation for neural network
        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate);

          nodes.forEach((node) => {
            const time = Date.now() * 0.001;
            node.position.x = node.userData.originalPosition.x + Math.sin(time * node.userData.speed) * 0.3;
            node.position.y = node.userData.originalPosition.y + Math.cos(time * node.userData.speed) * 0.3;
            node.position.z = node.userData.originalPosition.z + Math.sin(time * node.userData.speed * 0.7) * 0.2;
            node.rotation.x += 0.001;
            node.rotation.y += 0.002;
          });

          renderer.render(scene, camera);
        };
        animate();
      } else if (type === 1) {
        // Morphing geometric shapes
        const shapes: THREE.Mesh[] = [];
        const colors = [0x00d4ff, 0xaa00ff, 0x00d4ff];

        for (let i = 0; i < 3; i++) {
          const geometry = new THREE.OctahedronGeometry(1, 2);
          const material = new THREE.MeshPhongMaterial({
            color: colors[i],
            emissive: colors[i],
            emissiveIntensity: 0.3,
            wireframe: false,
          });
          const shape = new THREE.Mesh(geometry, material);
          shape.position.x = (i - 1) * 2;
          shape.userData = { index: i };
          scene.add(shape);
          shapes.push(shape);
          objectsRef.current.push(shape);
        }

        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate);

          shapes.forEach((shape, i) => {
            const time = Date.now() * 0.0005;
            shape.rotation.x += 0.003;
            shape.rotation.y += 0.004;
            shape.rotation.z += 0.002;
            shape.scale.x = 1 + Math.sin(time + i) * 0.3;
            shape.scale.y = 1 + Math.cos(time + i) * 0.3;
            shape.scale.z = 1 + Math.sin(time * 0.7 + i) * 0.3;
          });

          renderer.render(scene, camera);
        };
        animate();
      } else {
        // Particle cloud with flow
        const particleCount = 500;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 10;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

          velocities[i * 3] = (Math.random() - 0.5) * 0.02;
          velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
          velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.userData.velocities = velocities;

        const material = new THREE.PointsMaterial({
          color: 0x00d4ff,
          size: 0.05,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.6,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);
        objectsRef.current.push(particles);

        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate);

          const positions = geometry.attributes.position.array as Float32Array;
          const velocities = geometry.userData.velocities as Float32Array;

          for (let i = 0; i < particleCount; i++) {
            positions[i * 3] += velocities[i * 3];
            positions[i * 3 + 1] += velocities[i * 3 + 1];
            positions[i * 3 + 2] += velocities[i * 3 + 2];

            if (Math.abs(positions[i * 3]) > 5) velocities[i * 3] *= -1;
            if (Math.abs(positions[i * 3 + 1]) > 5) velocities[i * 3 + 1] *= -1;
            if (Math.abs(positions[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;
          }

          geometry.attributes.position.needsUpdate = true;
          renderer.render(scene, camera);
        };
        animate();
      }
    };

    createVisualization(index % 3);

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [index]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
      }}
    />
  );
};
