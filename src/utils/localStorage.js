export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeItem = (...args) => {
  args.forEach((arg) => {
    localStorage.removeItem(arg);
  });
};

export const clearItem = () => {
  localStorage.clear();
};
