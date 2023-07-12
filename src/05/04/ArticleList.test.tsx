import { render, screen, within } from "@testing-library/react";
import { ArticleList } from "./ArticleList";
import { items } from "./fixture";

/* 리스트 5-13
test("목록을 표시한다", () => {
  render(<ArticleList items={items} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});
*/

test("제목을 표시한다", () => {
  render(<ArticleList items={items} />);
  expect(screen.getByRole("heading", { name: "기사 목록" })).toBeInTheDocument();
});

test("items의 수만큼 목록을 표시한다", () => {
  render(<ArticleList items={items} />);
  expect(screen.getAllByRole("listitem")).toHaveLength(3);
});

test("items의 수만큼 목록을 표시한다", () => {
  render(<ArticleList items={items} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
  expect(within(list).getAllByRole("listitem")).toHaveLength(3);
});

test("목록에 표시할 데이터가 없으면 '게재된 기사가 없습니다'를 표시한다", () => {
  // 빈 배열을 items에 할당하여 목록에 표시할 데이터가 없는 상황을 재현한다
  render(<ArticleList items={[]} />);
  // 존재하지 않을 것으로 예상하는 요소의 취득을 시도한다
  const list = screen.queryByRole("list");
  // list가 존재하지 않는다
  expect(list).not.toBeInTheDocument();
  // list가 null이다
  expect(list).toBeNull();
  // '게재된 기사가 없습니다'가 표시되었는지 확인한다
  expect(screen.getByText("게재된 기사가 없습니다")).toBeInTheDocument();
});

test("Snapshot: items의 수만큼 목록을 표시한다", () => {
  const { container } = render(<ArticleList items={items} />);
  expect(container).toMatchSnapshot();
});
