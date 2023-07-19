const styles = ({ columns }) => {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 109px)`,
    columnGap: "20px",
    rowGap: "20px",
  };
};

export const Grid = ({ columns, children }) => {
  return <div style={styles({ columns })}>{children}</div>;
};
