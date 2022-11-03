type Direction = "row" | "column" | "row-reverse";

export const flexDisplay = (
  width: string,
  height: string,
  direction: Direction
) => `display: flex;
flex-direction: ${direction};
width: ${width};
height: ${height};`;

export const selectPreviousIndex = (index: number, length: number) =>
  index === 0 ? length - 1 : index - 1;

export const selectNextIndex = (index: number, length: number) =>
  index === length - 1 ? 0 : index + 1;
