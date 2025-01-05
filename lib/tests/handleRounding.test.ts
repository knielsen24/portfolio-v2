import { expect, test } from "vitest";
import { handleRounding } from "../helpers";

test("rounds up to .5 or .0", () => {
  expect(handleRounding("3.1")).toBe(3.5);
  expect(handleRounding("3.6")).toBe(4.0);
});
