import type { Article, Articles, HttpError } from "./type";

export const httpError: HttpError = {
  err: { message: "internal server error" },
};

export const getMyArticlesData: Articles = {
  articles: [
    {
      id: "howto-testing-with-typescript",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["testing"],
      title: "타입스크립트를 사용한 테스트 작성법",
      body: "테스트 작성 시 타입스크립트를 사용하면 테스트의 유지 보수가 쉬워진다",
    },
    {
      id: "nextjs-link-component",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["nextjs"],
      title: "Next.js의 링크 컴포넌트",
      body: "Next.js는 화면을 이동할 때 링크 컴포넌트를 사용한다",
    },
    {
      id: "react-component-testing-with-jest",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["testing", "react"],
      title: "제스트로 시작하는 리액트 컴포넌트 테스트",
      body: "제스트는 단위 테스트처럼 UI 컴포넌트를 테스트할 수 있다",
    },
  ],
};

export const postMyArticleData: Article = {
  id: "xxxxxxx-123456",
  createdAt: "2022-07-19T22:38:41.005Z",
  tags: ["testing", "react"],
  title: "제스트로 시작하는 리액트 컴포넌트 테스트",
  body: "제스트는 단위 테스트처럼 UI 컴포넌트를 테스트할 수 있다",
};
