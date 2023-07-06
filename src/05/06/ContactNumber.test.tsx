import { render, screen } from "@testing-library/react";
import { ContactNumber } from "./ContactNumber";

describe("연락처", () => {
  test("제목", () => {
    render(<ContactNumber />);
    expect(screen.getByText("연락처")).toBeInTheDocument();
  });
  test("전화번호", () => {
    render(<ContactNumber />);
    expect(screen.getByLabelText("전화번호")).toBeInTheDocument();
  });
  test("이름", () => {
    render(<ContactNumber />);
    expect(screen.getByLabelText("이름")).toBeInTheDocument();
  });
});
