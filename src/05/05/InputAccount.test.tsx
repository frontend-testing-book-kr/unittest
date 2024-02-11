import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputAccount } from "./InputAccount";

// 테스트 파일 작성 초기에 설정
const user = userEvent.setup();

/* 코드 5-24
test("비밀번호 입력란", async () => {
  render(<InputAccount />);
  const textbox = screen.getByRole("textbox", { name: "비밀번호" });
  expect(textbox).toBeInTheDocument();
});
*/

test("fieldset의 접근 가능한 이름을 legend에서 인용한다", () => {
  render(<InputAccount />);
  expect(
    screen.getByRole("group", { name: "계정정보 입력" })
  ).toBeInTheDocument();
});

test("메일주소 입력란", async () => {
  render(<InputAccount />);
  // 메일주소 입력란 취득
  const textbox = screen.getByRole("textbox", { name: "메일주소" });
  const value = "taro.tanaka@example.com";
  // textbox에 value를 입력
  await user.type(textbox, value);
  // 초깃값이 입력된 폼 요소가 존재하는지 검증
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test("비밀번호 입력란", async () => {
  render(<InputAccount />);
  expect(() => screen.getByPlaceholderText("8자 이상")).not.toThrow();
  expect(() => screen.getByRole("textbox", { name: "비밀번호" })).toThrow();
});

test("비밀번호 입력란", async () => {
  render(<InputAccount />);
  const password = screen.getByPlaceholderText("8자 이상");
  const value = "abcd1234";
  await user.type(password, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test("Snapshot: 계정정보 입력 폼이 표시된다", () => {
  const { container } = render(<InputAccount />);
  expect(container).toMatchSnapshot();
});
