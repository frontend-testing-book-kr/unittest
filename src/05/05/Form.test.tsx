import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

const user = userEvent.setup();

test("form의 접근 가능한 이름은 heading에서 인용합니다", () => {
  render(<Form />);
  expect(
    screen.getByRole("form", { name: "신규 계정 등록" })
  ).toBeInTheDocument();
});

test("주요 영역이 표시되어 있다", () => {
  render(<Form />);
  expect(
    screen.getByRole("heading", { name: "신규 계정 등록" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("group", { name: "계정정보 입력" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("group", { name: "이용 약관 동의" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "회원가입" })
  ).toBeInTheDocument();
});

test("회원가입 버튼은 비활성화 상태다", () => {
  render(<Form />);
  expect(screen.getByRole("button", { name: "회원가입" })).toBeDisabled();
});

test("이용 약관에 동의하는 체크 박스를 클릭하면 회원가입 버튼은 활성화된다", async () => {
  render(<Form />);
  await user.click(screen.getByRole("checkbox"));
  expect(screen.getByRole("button", { name: "회원가입" })).toBeEnabled();
});

test("Snapshot: 신규 계정 등록 폼이 표시된다", () => {
  const { container } = render(<Form />);
  expect(container).toMatchSnapshot();
});
