import { getMyArticles } from "../fetchers";

export async function getMyArticleLinksByCategory(category: string) {
  // 데이터 취득 함수(Web API 클라이언트)
  const data = await getMyArticles();
  // 취득한 데이터 중 지정한 태그를 포함한 기사만 골라낸다
  const articles = data.articles.filter((article) =>
    article.tags.includes(category)
  );
  if (!articles.length) {
    // 해당되는 기사가 없으면 null을 반환한다
    return null;
  }
  // 해당되는 기사가 있으면 목록용으로 가공해서 데이터를 반환한다
  return articles.map((article) => ({
    title: article.title,
    link: `/articles/${article.id}`,
  }));
}
