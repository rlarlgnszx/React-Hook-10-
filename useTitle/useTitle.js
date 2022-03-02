export const useTitle = (init) => {
  const [title, setTitle] = useState(init);
  const updateTitle = () => {
    const html = document.querySelector("title");
    html.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
