export const joinStyles = (classes) => [...classes].join(' ');

export const createNumberArray = (n) => new Array(n).fill(0).map((_, index) => index + 1);

export const setColor = () => {
  const randomRange = (n, m) => Math.floor(Math.random() * (m - n + 1)) + n;
  const [a, b, c] = [randomRange(0, 225), randomRange(0, 225), randomRange(0, 225)];

  return `rgb(${225 - a}, ${225 - b}, ${225 - c})`;
}
