import { getGreet } from ".";
import * as Fetchers from "../fetchers";
import { httpError } from "../fetchers/fixtures";

jest.mock("../fetchers");

/* 리스트 4-9
// id, email을 가진 응답 객체를 작성
jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
  id: "xxxxxxx-123456",
  email: "taroyamada@myapi.testing.com",
});
*/

/* 리스트 4-14
jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);
*/

describe("getGreet", () => {
  test("데이터 취득 성공시 : 사용자 이름이 없는 경우", async () => {
    // getMyProfile이 resolve됐을 때의 값을 재현
    jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
      id: "xxxxxxx-123456",
      email: "taroyamada@myapi.testing.com",
    });
    await expect(getGreet()).resolves.toBe("Hello, anonymous user!");
  });
  test("데이터 취득 성공시: 사용자 이름이 있는 경우", async () => {
    jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
      id: "xxxxxxx-123456",
      email: "taroyamada@myapi.testing.com",
      name: "taroyamada",
    });
    await expect(getGreet()).resolves.toBe("Hello, taroyamada!");
  });
  test("데이터 취득 실패시", async () => {
    // getMyProfile이 reject됐을 때의 값을 재현
    jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);
    await expect(getGreet()).rejects.toMatchObject({
      err: { message: "internal server error" },
    });
  });
  test("데이터 취득 실패시 에러가 발생한 데이터와 함께 예외가 발생한다", async () => {
    expect.assertions(1);
    jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);
    try {
      await getGreet();
    } catch (err) {
      expect(err).toMatchObject(httpError);
    }
  });
});
