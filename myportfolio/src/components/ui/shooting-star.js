import React, { useEffect, useRef } from "react";

const ShootingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;
    let shootingStars = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function createShootingStar() {
      return {
        x: Math.random() * width,
        y: 0,
        length: 200 + Math.random() * 300,
        speed: 10 + Math.random() * 10,
        size: 2 + Math.random() * 1.5,
        waitTime: Math.random() * 3000,
        active: false,
      };
    }

    function init() {
      shootingStars = [];
      for (let i = 0; i < 3; i++) {
        shootingStars.push(createShootingStar());
      }
    }

    function drawShootingStar(star) {
      if (!star.active) return;
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x - star.length, star.y + star.length * 0.3);
      ctx.strokeStyle = "white";
      ctx.lineWidth = star.size;
      ctx.shadowColor = "white";
      ctx.shadowBlur = 10;
      ctx.stroke();
    }

    function animate(time = 0) {
      ctx.clearRect(0, 0, width, height);

      shootingStars.forEach((star) => {
        if (!star.active) {
          star.waitTime -= 16.6;
          if (star.waitTime <= 0) {
            star.active = true;
            star.x = Math.random() * width;
            star.y = 0;
          }
        } else {
          star.x += star.speed;
          star.y += star.speed * 0.3;
          star.length -= 5;
          star.size *= 0.95;

          drawShootingStar(star);

          if (star.y > height || star.length <= 0) {
            Object.assign(star, createShootingStar());
          }
        }
      });

      requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener("resize", resize);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
};

export default ShootingStars;
