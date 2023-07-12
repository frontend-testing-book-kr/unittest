import { timeout, wait } from ".";

/**
 * 원서에 있는 원본 저장소는 중간과정은 생략하고 최종 완성본만 기재한 부분들이 있습니다.
 * 독자의 편의를 위해 리스트별로 코드를 정리한 뒤 주석처리 했습니다.
 * 독서중인 부분의 코드를 실행해보고 싶다면 
 *   1)최종 완성본 코드를 수정하며 실행하거나 
 *   2)리스트별로 주석처리된 부분을 제거하고 실행하면서 읽어주세요.
 * 
 * 주의 : 책에 있는 실행결과는 원서와 동일하게 최종 완성본을 실행했을 때를 기준으로 작성했습니다.
 * 리스트별로 제가 정리해둔 부분의 주석을 제거한 뒤 실행하고 '책에있는 실행결과와 다른데?'라고 오해하는 일이 없도록 주의해주세요.
 * 예를 들어 원서 최종 완성본의 테스트는 총 126개입니다. 제가 리스트별로 정리한 테스트들의 주석을 해제하면 당연히 테스트 갯수가 늘어납니다.
 */

/* 리스트 3-45
test("지정 시간을 기다린 뒤 경과시간과 함께 reject된다", async () => {
  try {
    await wait(50); // timeout 함수를 사용할 생각이었는데 실수로 wait을 사용했다
    // 에러가 발생하지 않으므로 여기서 종료되면서 테스트는 성공한다
  } catch (err) {
    // 단언문은 실행되지 않는다
    expect(err).toBe(50);
  }
});
*/

/* 리스트 3-46
test("지정 시간을 기다린 뒤 경과시간과 함께 reject된다", async () => {
  expect.assertions(1); // 단언문이 한 번 실행되는 것을 기대하는 테스트가 된다
  try {
    await wait(50);
    // 단언문이 한 번도 실행되지 않은채로 종료되므로 테스트는 실패한다
  } catch (err) {
    expect(err).toBe(50);
  }
});
*/

describe("비동기 처리", () => {
  describe("wait", () => {
    test("지정 시간을 기다린 뒤 경과시간과 함께 resolve된다", () => {
      return wait(50).then((duration) => {
        expect(duration).toBe(50);
      });
    });
    test("지정 시간을 기다린 뒤 경과시간과 함께 resolve된다", () => {
      return expect(wait(50)).resolves.toBe(50);
    });
    test("지정 시간을 기다린 뒤 경과시간과 함께 resolve된다", async () => {
      await expect(wait(50)).resolves.toBe(50);
    });
    test("지정 시간을 기다린 뒤 경과시간과 함께 resolve된다", async () => {
      expect(await wait(50)).toBe(50);
    });
  });
  describe("timeout", () => {
    test("지정 시간을 기다린 뒤 경과시간과 함께 reject된다", () => {
      return timeout(50).catch((duration) => {
        expect(duration).toBe(50);
      });
    });
    test("지정 시간을 기다린 뒤 경과시간과 함께 reject된다", () => {
      return expect(timeout(50)).rejects.toBe(50);
    });
    test("지정 시간을 기다린 뒤 경과시간과 함께 reject된다", async () => {
      await expect(timeout(50)).rejects.toBe(50);
    });
  });
});

test("지정 시간을 기다린 뒤 경과시간과 함께 reject된다", async () => {
  expect.assertions(1);
  try {
    await timeout(50);
  } catch (err) {
    expect(err).toBe(50);
  }
});

test("return 하고 있지 않으므로 Promise가 완료되기 전에 테스트가 종료된다", () => {
  // 실패할 것을 기대하고 작성한 단언문
  expect(wait(2000)).resolves.toBe(3000);
  // 올바르게 고치려면 아래 주석처럼 단언문을 return 해야한다
  // return expect(wait(2000)).resolves.toBe(3000);
});
