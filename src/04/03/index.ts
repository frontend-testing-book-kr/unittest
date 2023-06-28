import { getMyProfile } from "../fetchers";

/* 리스트 4-7 fetchers 폴더에 나뉘어 있지만 편의를 위해 여기서도 주석으로 제공합니다
export type Profile = {
  id: string;
  name?: string;
  age?: number;
  email: string;
};

export function getMyProfile(): Promise<Profile> {
  return fetch("https://myapi.testing.com/my/profile").then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  });
}
*/

/* 리스트 4-8
export async function getGreet() {
  const data = await getMyProfile();
  if (!data.name) {
    // 1. name이 없으면 하드코딩된 인사말을 반환한다
    return `Hello, anonymous user!`;
  }
  // 2. name이 있으면 name을 포함한 인사말을 반환한다
  return `Hello, ${data.name}!`;
}
*/

/* 리스트 4-12
export function getMyProfile(): Promise<Profile> {
  return fetch("https://myapi.testing.com/my/profile").then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      // 200번대 이외의 응답인 경우
      throw data;
    }
    return data;
  });
}
*/

export async function getGreet() {
  // 테스트하고 싶은 것은 이 라인에서의 데이터 취득 여부와
  const data = await getMyProfile();
  // 취득한 데이터를 이 라인에서 사용할 수 있는지다
  if (!data.name) {
    return `Hello, anonymous user!`;
  }
  return `Hello, ${data.name}!`;
}
