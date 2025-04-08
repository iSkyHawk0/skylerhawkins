// components/SubtleBackground.js
"use client";
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

// Wrapper to absolutely position the canvas behind section content.
const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* So it doesn't block interactions */
  z-index: 0;         /* Behind all other content */
`;

export default function SubtleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Get parent container dimensions.
    let width = canvas.parentElement.offsetWidth;
    let height = canvas.parentElement.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Define wisp parameters.
    const wisps = []; // Array to hold active wisps.
    const spawnInterval = 800; // Spawn a new wisp every 500ms.
    const minSpeed = 0.05; // Minimum vertical speed in pixels per ms.
    const maxSpeed = 0.15; // Maximum vertical speed in pixels per ms.
    const boltRadius = 1; // Base radius for the wisp (used in gradient).

    let lastSpawnTime = 0;
    let lastFrameTime = performance.now();

    // Animation loop: spawn wisps and update their vertical positions.
    function animate(now) {
      const dt = now - lastFrameTime;
      lastFrameTime = now;

      // Instead of clearing completely, fill with a semi-transparent rectangle.
      // This lets previous frames fade gradually, creating a trailing effect.
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Adjust opacity to control trail length.
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      // Spawn a new wisp if enough time has passed.
      if (now - lastSpawnTime > spawnInterval) {
        const wisp = {
          // Start at a random horizontal position along the top (above view).
          x: Math.random() * width,
          y: -10,
          // Random speed between minSpeed and maxSpeed (pixels per ms).
          speed: minSpeed + Math.random() * (maxSpeed - minSpeed)
        };
        wisps.push(wisp);
        lastSpawnTime = now;
      }

      // Update and draw each wisp.
      for (let i = wisps.length - 1; i >= 0; i--) {
        const wisp = wisps[i];
        // Move wisp downward according to its speed.
        wisp.y += wisp.speed * dt;

        // Remove the wisp if it exits the bottom of the canvas.
        if (wisp.y - boltRadius * 12 > height) {
          wisps.splice(i, 1);
          continue;
        }

        // Create a radial gradient for the wisp trail.
        const gradient = ctx.createRadialGradient(
          wisp.x, wisp.y, 0,
          wisp.x, wisp.y, boltRadius * 12
        );
        // Use the same color stops as the original AnimatedBackground.
        gradient.addColorStop(0, '#00f'); // Blue center.
        gradient.addColorStop(0.5, 'rgba(128,0,128,0.4)'); // Partially tinted purple.
        gradient.addColorStop(1, 'rgba(128,0,128,0)'); // Fully transparent edge.

        // Draw the wisp (a small circle).
        ctx.beginPath();
        ctx.arc(wisp.x, wisp.y, boltRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // Handle resizing: update canvas dimensions if the parent size changes.
    const handleResize = () => {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <CanvasWrapper>
      <canvas ref={canvasRef} />
    </CanvasWrapper>
  );
}
