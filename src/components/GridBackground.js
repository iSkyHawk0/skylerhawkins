// components/GridBackground.js
"use client";
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

// A wrapper that positions the grid absolutely behind any content.
const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;  /* Ensures the grid is behind the content */
`;

// The styled canvas for drawing the grid.
const GridCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

export default function GridBackground() {
  const gridCanvasRef = useRef(null);

  useEffect(() => {
    const gridCanvas = gridCanvasRef.current;
    const ctxGrid = gridCanvas.getContext('2d');

    let width = gridCanvas.parentElement.offsetWidth;
    let height = gridCanvas.parentElement.offsetHeight;
    gridCanvas.width = width;
    gridCanvas.height = height;

    // ────── GRID PARAMETERS ──────
    const gridSpacing = 20;
    const fadeMargin = 100;
    const baseDotOpacity = 0.3;
    const dotRadius = 1;

    // Helper to compute fade factor near the edges.
    function getFadeFactor(value, maxValue, margin) {
      if (value < margin) return value / margin;
      if (value > maxValue - margin) return (maxValue - value) / margin;
      return 1;
    }

    // Draws the grid on the canvas.
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

    // Redraw the grid on container resize.
    const handleResize = () => {
      width = gridCanvas.parentElement.offsetWidth;
      height = gridCanvas.parentElement.offsetHeight;
      gridCanvas.width = width;
      gridCanvas.height = height;
      drawGrid();
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <CanvasWrapper>
      <GridCanvas ref={gridCanvasRef} />
    </CanvasWrapper>
  );
}
