import { getArticleList } from "@/app/_libs/microcms";
import ArticleList from "@/app/_components/ArticleList";
import Pagination from "@/app/_components/Pagination";
import { DETAIL_ARTICLE_LIST_LIMIT } from "@/app/_constants";
import Sheet from "@/app/_components/Sheet";
import styles from "./page.module.css";

export default async function Page() {
  const { contents: article, totalCount } = await getArticleList({
    limit: DETAIL_ARTICLE_LIST_LIMIT,
  });

  return (
    <div className={styles.container}>
      <Sheet>
        <h2 className={styles.sectionTitle}>記事一覧</h2>
        <ArticleList article={article} />
        <Pagination totalCount={totalCount} />
      </Sheet>
    </div>
  );
}
