import { useMyHook } from "../hooks/useMyHook";

const MyComponent = () => {
  const { data, isLoading } = useMyHook();
  console.log(data);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>My Component</h2>
      {data.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </div>
  );
};
export default MyComponent;
