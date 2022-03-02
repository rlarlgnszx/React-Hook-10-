const useAxios = (opts, axiosInstances = defaultAxios) => {
    const [state, setState] = useState({
      loding: true,
      error: null,
      data: null
    });
    if (!opts.url) {
      return;
    }
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
      setState({
        ...state,
        loding: true
      });
      setTrigger(new Date.now());
    };
    useEffect(() => {
      axiosInstances(opts)
        .then((data) => {
          setState({
            ...state,
            loding: false,
            data
          });
        })
        .catch((error) => {
          setState({ ...state, loding: false, error });
        });
    }, [trigger]);
    return { state, refetch };
  };
  export default useAxios;