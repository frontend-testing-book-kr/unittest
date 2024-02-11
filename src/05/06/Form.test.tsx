import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { deliveryAddresses } from "./fixtures";
import { Form } from "./Form";

const user = userEvent.setup();

async function inputContactNumber(
  inputValues = {
    name: "배언수",
    phoneNumber: "000-0000-0000",
  }
) {
  await user.type(
    screen.getByRole("textbox", { name: "전화번호" }),
    inputValues.phoneNumber
  );
  await user.type(
    screen.getByRole("textbox", { name: "이름" }),
    inputValues.name
  );
  return inputValues;
}

async function inputDeliveryAddress(
  inputValues = {
    postalCode: "16397",
    prefectures: "경기도",
    municipalities: "수원시 권선구",
    streetNumber: "매곡로 67",
  }
) {
  await user.type(
    screen.getByRole("textbox", { name: "우편번호" }),
    inputValues.postalCode
  );
  await user.type(
    screen.getByRole("textbox", { name: "시/도" }),
    inputValues.prefectures
  );
  await user.type(
    screen.getByRole("textbox", { name: "시/군/구" }),
    inputValues.municipalities
  );
  await user.type(
    screen.getByRole("textbox", { name: "도로명" }),
    inputValues.streetNumber
  );
  return inputValues;
}

async function clickSubmit() {
  await user.click(
    screen.getByRole("button", { name: "주문내용 확인" })
  );
}

function mockHandleSubmit() {
  const mockFn = jest.fn();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: { [k: string]: unknown } = {};
    formData.forEach((value, key) => (data[key] = value));
    mockFn(data);
  };
  return [mockFn, onSubmit] as const;
}

describe("이전 배송지가 없는 경우", () => {
  test("배송지 입력란이 존재한다", () => {
    render(<Form />);
    expect(screen.getByRole("group", { name: "연락처" })).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "배송지" })).toBeInTheDocument();
  });

  test("폼을 제출하면 입력 내용을 전달받는다", async () => {
    const [mockFn, onSubmit] = mockHandleSubmit();
    render(<Form onSubmit={onSubmit} />);
    const contactNumber = await inputContactNumber();
    const deliveryAddress = await inputDeliveryAddress();
    await clickSubmit();
    expect(mockFn).toHaveBeenCalledWith(
      expect.objectContaining({ ...contactNumber, ...deliveryAddress })
    );
  });

  test("Snapshot", () => {
    const { container } = render(<Form />);
    expect(container).toMatchSnapshot();
  });
});

describe("이전 배송지가 있는 경우", () => {
  test("질문에 대답할 때까지 배송지를 선택할 수 없다", () => {
    render(<Form deliveryAddresses={deliveryAddresses} />);
    expect(
      screen.getByRole("group", { name: "새로운 배송지를 등록하시겠습니까?" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("group", { name: "이전 배송지" })
    ).toBeDisabled();
  });

  test("'아니오'를 선택하고 제출하면 입력 내용을 전달받는다", async () => {
    const [mockFn, onSubmit] = mockHandleSubmit();
    render(<Form deliveryAddresses={deliveryAddresses} onSubmit={onSubmit} />);
    await user.click(screen.getByLabelText("아니오"));
    expect(
      screen.getByRole("group", { name: "이전 배송지" })
    ).toBeInTheDocument();
    const inputValues = await inputContactNumber();
    await clickSubmit();
    expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(inputValues));
  });

  test("'네'를 선택하고 제출하면 입력 내용을 전달받는다", async () => {
    const [mockFn, onSubmit] = mockHandleSubmit();
    render(<Form deliveryAddresses={deliveryAddresses} onSubmit={onSubmit} />);
    await user.click(screen.getByLabelText("네"));
    expect(
      screen.getByRole("group", { name: "새로운 배송지" })
    ).toBeInTheDocument();
    const contactNumber = await inputContactNumber();
    const deliveryAddress = await inputDeliveryAddress();
    await clickSubmit();
    expect(mockFn).toHaveBeenCalledWith(
      expect.objectContaining({ ...contactNumber, ...deliveryAddress })
    );
  });

  test("Snapshot", () => {
    const { container } = render(
      <Form deliveryAddresses={deliveryAddresses} />
    );
    expect(container).toMatchSnapshot();
  });
});
