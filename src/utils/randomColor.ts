// export const randomColor = Math.floor(Math.random() * 16777215).toString(16);

export const generateRandomColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return color.length <= 5 ? `#0${color}` : `#${color}`;
};
