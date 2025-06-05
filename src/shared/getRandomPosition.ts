const DROP_RANGE = {
  x: { min: 200, max: 1800 },
  y: { min: 300, max: 800 }
};

export const getRandomPosition = () => {
  const randomX = Math.floor(Math.random() * (DROP_RANGE.x.max - DROP_RANGE.x.min) + DROP_RANGE.x.min);
  const randomY = Math.floor(Math.random() * (DROP_RANGE.y.max - DROP_RANGE.y.min) + DROP_RANGE.y.min);
  return { x: randomX, y: randomY };
};