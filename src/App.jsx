import "./App.css";
import { Counter } from "./components/Counter";
import { Text } from "./components/Text";

function App() {
  return (
    <div>
      <nav className={"nav"}>
        <Text className={"counter"}> 0 bulbs </Text>
        <Counter name={" rows"} />
        <Counter name={" columns"} />
      </nav>
    </div>
  );
}

export default App;
