export const useConform = (message, callback, abort) => {
  if (typeof callback !== "function" || typeof abort !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      abort();
    }
  };
  return confirmAction;
};
