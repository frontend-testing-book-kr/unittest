import { render, screen } from "@testing-library/react";
import { Agreement } from "./Agreement";

test("fieldset의 접근 가능한 이름을 legend에서 인용한다", () => {
  render(<Agreement />);
  expect(
    screen.getByRole("group", { name: "이용계약 동의" })
  ).toBeInTheDocument();
});

test("체크박스가 체크되어 있지 않다", () => {
  render(<Agreement />);
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});

test("이용계약 링크가 있다", () => {
  render(<Agreement />);
  expect(screen.getByRole("link")).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveTextContent("이용계약");
  expect(screen.getByRole("link")).toHaveAttribute("href", "/terms");
  expect(screen.getByRole("link", { name: "이용계약" })).toHaveAttribute(
    "href",
    "/terms"
  );
});

test("Snapshot: 이용계약 동의가 표시되어 있다", () => {
  const { container } = render(<Agreement />);
  expect(container).toMatchSnapshot();
});
