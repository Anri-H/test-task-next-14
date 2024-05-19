const setTimer = () => {
  let timer: NodeJS.Timeout | null = null;
  return (fn: () => void, tim = 500) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, tim);
  };
};

export const searchTimOut = setTimer();
