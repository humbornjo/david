import { useEffect, useRef } from 'react';

const FullPageCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d');

    // Function to resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawCrossLine(ctx, canvas.width, canvas.height);
    };

    // Initial resize
    resizeCanvas();

    // Event listener for window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const drawCrossLine = (ctx: CanvasRenderingContext2D | null, width: number, height: number) => {
    if (ctx == null) {
      return
    }
    ctx.clearRect(0, 0, width, height); // Clear previous drawing
    ctx.strokeStyle = '#000'; // Set line color
    ctx.lineWidth = 1; // Set line width

    // Draw vertical line
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    // Draw horizontal line
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();
  };

  return <canvas
    ref={canvasRef}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1, // Ensure it's in the background
      pointerEvents: 'none' // Prevent it from interfering with other elements
    }}
  />;
};

export default FullPageCanvas;
