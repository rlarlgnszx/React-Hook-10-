export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  if (typeof onChange === "function") {
    onChange(navigator.onLine);
  }
  const handle = () => {
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handle);
    window.addEventListener("offline", handle);
    () => {
      window.removeEventListener("online", handle);
      window.removeEventListener("offline", handle);
    };
  }, []);
  return status;
};
