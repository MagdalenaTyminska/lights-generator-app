import "./App.css";
import { Counter } from "./components/Counter";
import { SingleLight } from "./components/SingleLight";
import { Text } from "./components/Text";

function App() {
  return (
    <div>
      <nav className={"nav"}>
        <Text className={"counter"}> 0 bulbs </Text>
        <Counter name={" rows"} />
        <Counter name={" columns"} />
      </nav>
      <div>
        <SingleLight />
      </div>
    </div>
  );
}

export default App;
