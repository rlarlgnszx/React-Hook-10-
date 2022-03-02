hexport const useFade = (duration = 1, delay = 0) => {
  const element = useRef();
  if (typeof duration !== "number") {
    return;
  }
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
//Ex ><h2 useFade(1,5)></h2>