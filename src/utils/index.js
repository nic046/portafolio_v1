let colors;
let currentPixel = 0;
const mousePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

export const initCanvas = (canvas, isDarkMode) => {
  const ctx = canvas.getContext("2d");

  colors = isDarkMode
    ? ["#00FF0075", "#FFFFFF75", "#87CEFA75", "#32CD3275", "#9ACD3275"] 
    : ["#FF000075", "#FFD70075", "#0000FF75", "#7F7F7F75", "#FFA50075"]; 

  let width, height;
  let pixels = [];
  let coloredPixels = [];

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    pixels = [];
    for (let y = 0; y < height / 10; y++) {
      for (let x = 0; x < width / 10; x++) {
        pixels.push([x * 10, y * 10, 8, 8, "#d6d2d220", 1]);
      }
    }
  };

  const initColoredPixels = () => {
    for (let i = 0; i < 500; i++) {
      coloredPixels.push({
        x: width / 2,
        y: height / 2,
        alpha: 0,
        color: colors[i % colors.length],
        vx: -1 + Math.random() * 2,
        vy: -1 + Math.random() * 2,
      });
    }
  };

  const launchPixel = () => {
    coloredPixels[currentPixel].x = mousePosition.x;
    coloredPixels[currentPixel].y = mousePosition.y;
    coloredPixels[currentPixel].alpha = 1;

    currentPixel++;
    if (currentPixel >= coloredPixels.length) currentPixel = 0;
  };

  const drawGrid = () => {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < pixels.length; i++) {
      pixels[i][4] = 0;
    }

    for (let i = 0; i < coloredPixels.length; i++) {
      const pix =
        Math.floor(coloredPixels[i].y / 10) * (Math.floor(width / 10) + 1) +
        Math.floor(coloredPixels[i].x / 10);
      if (pixels[pix]) {
        pixels[pix][4] = coloredPixels[i].color;
        pixels[pix][5] = coloredPixels[i].alpha;
      }

      if (coloredPixels[i].alpha > 0) coloredPixels[i].alpha -= 0.008;
      if (coloredPixels[i].alpha < 0) coloredPixels[i].alpha = 0;
      coloredPixels[i].x += coloredPixels[i].vx;
      coloredPixels[i].y += coloredPixels[i].vy;
    }

    for (let i = 0; i < pixels.length; i++) {
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#d6d2d220";
      ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
      ctx.globalAlpha = pixels[i][5];
      ctx.fillStyle = pixels[i][4];
      ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
    }
  };

  const draw = () => {
    launchPixel();
    launchPixel();
    drawGrid();
    requestAnimationFrame(draw);
  };

  const handleMouseMove = (e) => {
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
  };

  const handleTouchMove = (e) => {
    mousePosition.x = e.touches[0].pageX;
    mousePosition.y = e.touches[0].pageY;
  };

  resize();
  initColoredPixels();
  draw();

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("touchstart", handleTouchMove);
  document.addEventListener("touchmove", handleTouchMove);
};
