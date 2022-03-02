export const useFullScreen = () => {
  const element = useRef();
  const Exit = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  return { element, triggerFull, Exit };
};
