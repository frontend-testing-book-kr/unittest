import { render, screen } from "@testing-library/react";
import { Articles } from "./Articles";

xtest("데이터를 불러오는 중이면 '..loading'을 표시한다", () => {
  render(<Articles items={[]} isLoading={true} />);
  expect(screen.getByText("...loading")).toBeInTheDocument();
});

xtest("목록이 비어 있으면 '게재된 기사가 없습니다'를 표시한다", () => {
  render(<Articles items={[]} isLoading={false} />);
  expect(screen.getByText("게재된 기사가 없습니다")).toBeInTheDocument();
});

test("목록에 표시할 데이터가 있으면 목록이 표시된다", () => {
  const items = [
    { id: 1, title: "Testing Next.js" },
    { id: 2, title: "Storybook play function" },
    { id: 3, title: "Visual Regression Testing " },
  ];
  render(<Articles items={items} isLoading={false} />);
  expect(screen.getByRole("list")).toBeInTheDocument();
});
