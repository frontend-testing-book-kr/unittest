import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import { Form } from "./Form";

/* 리스트 5-3
test("이름이 표시되었는지 확인", () => {
  render(<Form name="taro" />);
});
*/

/* 리스트 5-4
test("이름이 표시되었는지 확인", () => {
  render(<Form name="taro" />);
  console.log(screen.getByText("taro"));
});
*/

/* 리스트 5-7
test("heading이 표시되었는지 확인", () => {
  render(<Form name="taro" />);
  expect(screen.getByRole("heading"));
});
*/

test("이름이 표시되었는지 확인", () => {
  render(<Form name="taro" />);
  expect(screen.getByText("taro")).toBeInTheDocument();
});

test("버튼이 표시되었는지 확인", () => {
  render(<Form name="taro" />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("heading이 표시되었는지 확인", () => {
  render(<Form name="taro" />);
  expect(screen.getByRole("heading")).toHaveTextContent("계정 정보");
});

test("버튼을 클릭하면 이벤트 핸들러가 호출된다", () => {
  const mockFn = jest.fn();
  render(<Form name="taro" onSubmit={mockFn} />);
  fireEvent.click(screen.getByRole("button"));
  expect(mockFn).toHaveBeenCalled();
});

test("Snapshot: 계정명인 'taro'가 표시되었는지 확인한다", () => {
  const { container } = render(<Form name="taro" />);
  expect(container).toMatchSnapshot();
});

test("logRoles: 렌더링 결과로부터 역할과 접근 가능한 이름을 확인한다", () => {
  const { container } = render(<Form name="taro" />);
  logRoles(container);
});
