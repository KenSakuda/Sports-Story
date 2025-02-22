import { getArticleList } from "@/app/_libs/microcms";
import ArticleList from "@/app/_components/ArticleList";
import Pagination from "@/app/_components/Pagination";
import { DETAIL_ARTICLE_LIST_LIMIT } from "@/app/_constants";

export default async function Page() {
  const { contents: article, totalCount } = await getArticleList({
    limit: DETAIL_ARTICLE_LIST_LIMIT,
  });

  return (
    <>
      <ArticleList article={article} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
