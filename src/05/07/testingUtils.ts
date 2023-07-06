import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

export function getGroupByName(name: string) {
  return screen.getByRole("group", { name });
}

export async function inputContactNumber(
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

export async function inputDeliveryAddress(
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

export async function clickSubmit() {
  await user.click(
    screen.getByRole("button", { name: "주문내용 확인" })
  );
}
