// components/AnimatedBackground.js
"use client";
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

// Wrapper to position all canvases absolutely.
const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

// Three canvas layers:
// GridCanvas: draws the grid dots (static)
// CurvesCanvas: draws the curves (which will get tinted over time)
// DynamicCanvas: draws the animated wisps (with trailing effect)
const GridCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
const CurvesCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;
const DynamicCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
`;

export default function AnimatedBackground() {
  const gridCanvasRef = useRef(null);
  const curvesCanvasRef = useRef(null);
  const dynamicCanvasRef = useRef(null);
  let animationFrameId;

  useEffect(() => {
    // Get canvas elements and their 2D contexts.
    const gridCanvas = gridCanvasRef.current;
    const curvesCanvas = curvesCanvasRef.current;
    const dynamicCanvas = dynamicCanvasRef.current;
    const ctxGrid = gridCanvas.getContext('2d');
    const ctxCurves = curvesCanvas.getContext('2d');
    const ctxDynamic = dynamicCanvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    gridCanvas.width = curvesCanvas.width = dynamicCanvas.width = width;
    gridCanvas.height = curvesCanvas.height = dynamicCanvas.height = height;

    // ────── GRID PARAMETERS ──────
    const gridSpacing = 20;
    const fadeMargin = 100; // Only dots near edges fade.
    const baseDotOpacity = 0.3;
    const dotRadius = 1;
    // Helper to compute fade factor: full opacity away from edges.
    function getFadeFactor(value, maxValue, margin) {
      if (value < margin) return value / margin;
      if (value > maxValue - margin) return (maxValue - value) / margin;
      return 1;
    }
    // Draw grid dots onto the grid canvas (and fill background with black).
    function drawGrid() {
      ctxGrid.fillStyle = "#000";
      ctxGrid.fillRect(0, 0, width, height);
      for (let x = 0; x < width; x += gridSpacing) {
        for (let y = 0; y < height; y += gridSpacing) {
          const fadeFactorX = getFadeFactor(x, width, fadeMargin);
          const fadeFactorY = getFadeFactor(y, height, fadeMargin);
          const fadeFactor = Math.min(fadeFactorX, fadeFactorY);
          const opacity = baseDotOpacity * fadeFactor;
          ctxGrid.fillStyle = `rgba(200,200,200, ${opacity})`;
          ctxGrid.beginPath();
          ctxGrid.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctxGrid.fill();
        }
      }
    }
    drawGrid();

    // ────── CURVE PARAMETERS & STATE ──────
    const curvesCount = 20; // Number of curves (adjustable).
    const offsetRange = 100; // Vertical offset range for curves.
    const centerX = width / 2;
    const centerY = height / 2;
    const curvature = 2e-7; // Increased curvature for a more pronounced curve.
    // Colors for interpolation:
    const originalColor = { r: 230, g: 230, b: 230, a: 0.1 }; // Original light grey.
    const targetColor = { r: 128, g: 0, b: 128, a: 0.4 }; // Target tinted purple.
    // For each curve, maintain a tint value (0 to 1).
    let curveTints = new Array(curvesCount).fill(0);
    // Helper: linear interpolation between two colors.
    function lerpColor(c1, c2, t) {
      const r = Math.round(c1.r + (c2.r - c1.r) * t);
      const g = Math.round(c1.g + (c2.g - c1.g) * t);
      const b = Math.round(c1.b + (c2.b - c1.b) * t);
      const a = c1.a + (c2.a - c1.a) * t;
      return `rgba(${r},${g},${b},${a})`;
    }
    // Draw curves onto the curves canvas using their current tint.
    function drawCurves() {
      ctxCurves.clearRect(0, 0, width, height);
      for (let i = 0; i < curvesCount; i++) {
        const offset = -offsetRange + (2 * offsetRange * i) / (curvesCount - 1);
        ctxCurves.beginPath();
        for (let x = 0; x <= width; x += 5) {
          const y = centerY + offset - curvature * Math.pow(x - centerX, 3);
          if (x === 0) {
            ctxCurves.moveTo(x, y);
          } else {
            ctxCurves.lineTo(x, y);
          }
        }
        // Interpolate the stroke color based on the tint value.
        const tint = curveTints[i]; // 0 (original) to 1 (fully tinted)
        const strokeColor = lerpColor(originalColor, targetColor, tint);
        ctxCurves.strokeStyle = strokeColor;
        ctxCurves.lineWidth = 1;
        ctxCurves.stroke();
      }
    }
    drawCurves();

    // ────── DYNAMIC WISP ANIMATION ──────
    const period = 10000; // 10-second cycle.
    const boltRadius = 1; // Small wisp dot.
    // For each wisp (one per curve), store progress and a speed multiplier.
    let wispProgress = new Array(curvesCount).fill(0).map(() => Math.random());
    let speedMultipliers = new Array(curvesCount).fill(0).map(() => 0.8 + Math.random()); // Random between 0.8 and 1.8.
    // To detect wrap-arounds, store previous progress.
    let prevWispProgress = [...wispProgress];
    let lastTime = Date.now();

    function animate() {
      const now = Date.now();
      const dt = now - lastTime;
      lastTime = now;
      
      // Fade dynamic canvas with a lower opacity to allow longer trails.
      ctxDynamic.globalCompositeOperation = "destination-out";
      ctxDynamic.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctxDynamic.fillRect(0, 0, width, height);
      ctxDynamic.globalCompositeOperation = "source-over";

      for (let i = 0; i < curvesCount; i++) {
        const oldProgress = wispProgress[i];
        // Update progress based on time elapsed and current speed multiplier.
        wispProgress[i] = (wispProgress[i] + (dt * speedMultipliers[i]) / period) % 1;
        // Detect wrap-around (wisp traversal completed).
        if (wispProgress[i] < oldProgress) {
          // Increase the tint for this curve by 0.1 (max after ~10 traversals).
          curveTints[i] = Math.min(1, curveTints[i] + 0.1);
        }
        // Slightly randomize speed multiplier so it fluctuates over time.
        speedMultipliers[i] += (Math.random() * 0.02 - 0.01);
        speedMultipliers[i] = Math.max(0.8, Math.min(1.8, speedMultipliers[i]));

        const t = wispProgress[i];
        const x = t * width;
        const offset = -offsetRange + (2 * offsetRange * i) / (curvesCount - 1);
        const y = centerY + offset - curvature * Math.pow(x - centerX, 3);

        // Create a radial gradient for the wisp: blue center and a purple trail.
        const gradient = ctxDynamic.createRadialGradient(x, y, 0, x, y, boltRadius * 12);
        gradient.addColorStop(0, '#00f');
        gradient.addColorStop(0.5, 'rgba(128,0,128,0.4)');
        gradient.addColorStop(1, 'rgba(128,0,128,0)');

        ctxDynamic.beginPath();
        ctxDynamic.arc(x, y, boltRadius, 0, Math.PI * 2);
        ctxDynamic.fillStyle = gradient;
        ctxDynamic.fill();
      }
      // Redraw curves with their updated tints.
      drawCurves();

      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    // ────── RESIZING HANDLER ──────
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      gridCanvas.width = curvesCanvas.width = dynamicCanvas.width = width;
      gridCanvas.height = curvesCanvas.height = dynamicCanvas.height = height;
      drawGrid();
      drawCurves();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CanvasWrapper>
      <GridCanvas ref={gridCanvasRef} />
      <CurvesCanvas ref={curvesCanvasRef} />
      <DynamicCanvas ref={dynamicCanvasRef} />
    </CanvasWrapper>
  );
}
