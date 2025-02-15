```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isMounted) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      setIsMounted(false);
    };
  }, [isMounted]);

  return <div>Count: {count}</div>;
}
```