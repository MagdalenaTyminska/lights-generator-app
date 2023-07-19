import "./App.css";
import { Counter } from "./components/Counter";
import { SingleLight } from "./components/SingleLight";
import { Text } from "./components/Text";
import { Grid } from "./components/Grid";
import { useState } from "react";

function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const handleIncrementRows = () => {
    setRows(rows + 1);
  };

  const handleDecrementRows = () => {
    if (rows <= 0) {
      return;
    }
    setRows(rows - 1);
  };

  const handleIncrementColumns = () => {
    if (columns >= 9) {
      return;
    }
    setColumns(columns + 1);
  };

  const handleDecrementColumns = () => {
    if (columns <= 0) {
      return;
    }
    setColumns(columns - 1);
  };

  const totalLights = rows * columns;
  const lights = Array.from({ length: totalLights });

  return (
    <div>
      <nav className={"nav"}>
        <Text className={"counter"}> {totalLights} bulbs </Text>
        <Counter
          name={" rows"}
          count={rows}
          onIncrement={handleIncrementRows}
          onDecrement={handleDecrementRows}
        />
        <Counter
          name={" columns"}
          count={columns}
          onIncrement={handleIncrementColumns}
          onDecrement={handleDecrementColumns}
        />
      </nav>
      <Grid columns={columns}>
        {lights.map(( index) => {
          return <SingleLight key={index} />;
        })}
      </Grid>
    </div>
  );
}

export default App;
