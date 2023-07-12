import { checkLength } from ".";
import * as Fetchers from "../fetchers";
import { postMyArticle } from "../fetchers";
import { httpError, postMyArticleData } from "../fetchers/fixtures";
import { ArticleInput } from "../fetchers/type";

jest.mock("../fetchers");

function mockPostMyArticle(input: ArticleInput, status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }
  try {
    checkLength(input.title);
    checkLength(input.body);
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockResolvedValue({ ...postMyArticleData, ...input });
  } catch (err) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }
}

function inputFactory(input?: Partial<ArticleInput>) {
  return {
    tags: ["testing"],
    title: "TypeScript를 사용한 테스트 작성법",
    body: "테스트 작성시 TypeScript를 사용하면 테스트의 유지보수가 쉬워진다",
    ...input,
  };
}

test("유효성 검사에 성공하면 성공 응답을 반환한다", async () => {
  // 유효성 검사에 통과하는 입력을 준비한다
  const input = inputFactory();
  // 입력값을 포함한 성공 응답을 반환하는 모의 객체를 만든다
  const mock = mockPostMyArticle(input);
  // input을 인자로 테스트할 함수를 실행한다
  const data = await postMyArticle(input);
  // 취득한 데이터에 입력 내용이 포함되어 있는지 검증한다
  expect(data).toMatchObject(expect.objectContaining(input));
  // 모의 객체 생성함수가 호출되었는지 검증한다
  expect(mock).toHaveBeenCalled();
});

test("유효성 검사에 실패하면 reject된다", async () => {
  expect.assertions(2);
  // 유효성 검사에 통과하지 못하는 입력을 준비한다
  const input = inputFactory({ title: "", body: "" });
  // 입력값을 포함한 성공 응답을 반환하는 모의 객체를 만든다
  const mock = mockPostMyArticle(input);
  // 유효성 검사에 통과하지 못하고 reject 되었는지 검증한다
  await postMyArticle(input).catch((err) => {
    // 에러 객체가 reject 되었는지 검증한다
    expect(err).toMatchObject({ err: { message: expect.anything() } });
    // 모의 객체 생성함수가 호출되었는지 검증한다
    expect(mock).toHaveBeenCalled();
  });
});

test("데이터 취득에 실패하면 reject된다", async () => {
  expect.assertions(2);
  // 유효성 검사에 통과하는 입력값을 준비한다
  const input = inputFactory();
  // 실패 응답을 반환하는 모의 객체를 만든다
  const mock = mockPostMyArticle(input, 500);
  // reject되었는지 검증한다
  await postMyArticle(input).catch((err) => {
    // 에러 객체가 reject되었는지 검증한다
    expect(err).toMatchObject({ err: { message: expect.anything() } });
    // 모의 객체 생성함수가 호출되었는지 검증한다
    expect(mock).toHaveBeenCalled();
  });
});
