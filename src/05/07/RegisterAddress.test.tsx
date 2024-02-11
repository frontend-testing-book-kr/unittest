import { render, screen } from "@testing-library/react";
import { mockPostMyAddress } from "./fetchers/mock";
import { RegisterAddress } from "./RegisterAddress";
import {
  clickSubmit,
  inputContactNumber,
  inputDeliveryAddress,
} from "./testingUtils";

jest.mock("./fetchers");

async function fillValuesAndSubmit() {
  const contactNumber = await inputContactNumber();
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
}

async function fillInvalidValuesAndSubmit() {
  const contactNumber = await inputContactNumber({
    name: "배언수",
    phoneNumber: "abc-defg-hijkl",
  });
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
}

beforeEach(() => {
  jest.resetAllMocks();
});

/* 코드 5-49
test("유효성 검사 에러가 발생하면 메시지가 표시된다", async () => {
  render(<RegisterAddress />);
  await fillInvalidValuesAndSubmit();
  expect(screen.getByText("올바르지 않은 값이 포함되어 있습니다")).toBeInTheDocument();
});
*/

/* 코드 5-50
test("원인이 명확하지 않은 에러가 발생하면 메시지가 표시된다", async () => {
  render(<RegisterAddress />);
  await fillValuesAndSubmit();
  expect(screen.getByText("알 수 없는 에러가 발생했습니다")).toBeInTheDocument();
});
*/

test("성공하면 '등록됐습니다'가 표시된다", async () => {
  const mockFn = mockPostMyAddress();
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText("등록됐습니다")).toBeInTheDocument();
});

test("실패하면 '등록에 실패했습니다'가 표시된다", async () => {
  const mockFn = mockPostMyAddress(500);
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText("등록에 실패했습니다")).toBeInTheDocument();
});

test("유효성 검사 에러가 발생하면 '올바르지 않은 값이 포함되어 있습니다'가 표시된다", async () => {
  render(<RegisterAddress />);
  await fillInvalidValuesAndSubmit();
  expect(screen.getByText("올바르지 않은 값이 포함되어 있습니다")).toBeInTheDocument();
});

test("원인이 명확하지 않은 에러가 발생하면 '알 수 없는 에러가 발생했습니다'가 표시된다", async () => {
  render(<RegisterAddress />);
  await fillValuesAndSubmit();
  expect(screen.getByText("알 수 없는 에러가 발생했습니다")).toBeInTheDocument();
});

test("Snapshot: 등록 폼이 표시된다", async () => {
  mockPostMyAddress();
  // const mockFn = mockPostMyAddress();
  const { container } = render(<RegisterAddress />);
  // const submitValues = await fillValuesAndSubmit();
  // expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(container).toMatchSnapshot();
});

/* 코드 5-55
test("Snapshot: 등록 폼이 표시된다", async () => {
  // mockPostMyAddress();
  const mockFn = mockPostMyAddress();
  const { container } = render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(container).toMatchSnapshot();
});
*/