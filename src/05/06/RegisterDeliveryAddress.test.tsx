import { fireEvent, render, screen } from "@testing-library/react";
import { RegisterDeliveryAddress } from "./RegisterDeliveryAddress";

describe("새로운 배송지를 등록하시겠습니까?", () => {
  test("라디오 버튼을 클릭하면 콜백 함수가 호출된다", () => {
    const fn = jest.fn();
    render(<RegisterDeliveryAddress onChange={fn} />);
    fireEvent.click(screen.getByLabelText("아니오"));
    expect(fn).toHaveBeenCalledWith(false);
    fireEvent.click(screen.getByLabelText("네"));
    expect(fn).toHaveBeenCalledWith(true);
  });
});
