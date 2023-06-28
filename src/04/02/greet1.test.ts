import { greet } from "./greet";

test("인사말을 반환한다(원래 구현대로)", () => {
  expect(greet("Taro")).toBe("Hello! Taro.");
});
