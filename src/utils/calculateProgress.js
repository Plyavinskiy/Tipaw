const BAR_CAPACITY = 20;

export const calculateProgress = (globalProgress) => {
  const progressArray = [];

  for (let i = 0; i < 5; i++) {
    const remainingProgress = Math.max(0, globalProgress - i * BAR_CAPACITY);
    const progress = Math.min(BAR_CAPACITY, remainingProgress);
    progressArray.push(progress);
  }

  return progressArray;
};
