import { render, screen } from "@testing-library/react";
import { DeliveryAddress } from "./DeliveryAddress";

describe("배송지", () => {
  test("제목", () => {
    render(<DeliveryAddress />);
    expect(screen.getByText("배송지")).toBeInTheDocument();
  });
  test("제목을 변경할 수 있다", () => {
    render(<DeliveryAddress title="새로운 배송지" />);
    expect(screen.getByText("새로운 배송지")).toBeInTheDocument();
  });
  test("우편번호", () => {
    render(<DeliveryAddress />);
    expect(
      screen.getByRole("textbox", { name: "우편번호" })
    ).toBeInTheDocument();
  });
  test("시/도", () => {
    render(<DeliveryAddress />);
    expect(
      screen.getByRole("textbox", { name: "시/도" })
    ).toBeInTheDocument();
  });
  test("시/군/구", () => {
    render(<DeliveryAddress />);
    expect(
      screen.getByRole("textbox", { name: "시/군/구" })
    ).toBeInTheDocument();
  });
  test("도로명", () => {
    render(<DeliveryAddress />);
    expect(
      screen.getByRole("textbox", { name: "도로명" })
    ).toBeInTheDocument();
  });
});
