const useDebounce = (fn: (...fnArgs) => void, delay: number) => {
  let timeoutId;

  return (...args) => {
    const wrappedFn = () => {
      clearTimeout(timeoutId);
      fn(...args);
    };

    clearTimeout(timeoutId);
    timeoutId = setTimeout(wrappedFn, delay);
  };
};

export default useDebounce;
