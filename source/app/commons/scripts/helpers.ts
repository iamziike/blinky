export const selectRandom = <T>(items: T[]) => {
  const random = Math.floor(Math.random() * items.length);
  return items[random];
};
