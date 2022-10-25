type Direction = "row" | "column";

export const flexDisplay = (
  width: string,
  height: string,
  direction: Direction
) => `display: flex;
flex-direction: ${direction};
width: ${width};
height: ${height};`;
