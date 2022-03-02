export const useTab = (init, allTabs) => {
  const [index, setIndex] = useState(init);
  // if (!allTabs || Array.isArray(allTabs)) {
  //   return;
  // }
  return { currentItem: allTabs[index], changeItem: setIndex };
};
