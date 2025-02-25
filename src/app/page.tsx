import styles from "./page.module.css";
// import Menu from "./_components/Menu";
import Layout from "./_components/Layout";
import Main from "./_components/Main";
import Sub from "./_components/Sub";
import Ad from "./_components/Ad";
import { TOP_ARTICLE_LIST_LIMIT } from "@/app/_constants";
import { getArticleList } from "@/app/_libs/microcms";
import Cards from "./_components/Cards";
import Ranking from "./_components/Ranking";
import SearchField from "./_components/SearchField";
import ButtonLink from "./_components/ButtonLink";
import Predict from "./_components/Predict";
import Stats from "./_components/Stats";
import ScrollToTop from "./_components/ScrollToTop";
import Slider from "./_components/Slider";

export const revalidate = 60;

type Props = {
  searchParams: {
    rankingDraftKey?: string;
    pickupDraftKey?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const data = await getArticleList({
    limit: TOP_ARTICLE_LIST_LIMIT,
  });

  return (
    <Layout>
      {/* <Menu /> */}
      <div className={styles.sliderWrapper}>
        <Slider articles={data.contents} />
      </div>
      <div className={styles.container}>
        <Main className={styles.mainContent}>
          <h1 className={styles.sectionTitle}>新着記事</h1>
          <div className={styles.cards}>
            <Cards articles={data.contents} />
          </div>
          <div className={styles.buttonLink}>
            <ButtonLink href="/articles">Read More</ButtonLink>
          </div>
        </Main>
        <Sub className={styles.sidebar}>
          <Ad />
          <Ranking draftKey={searchParams.rankingDraftKey} />
          <Ad />
          <Predict />
          <SearchField />
          <Ad />
          <Stats />
        </Sub>
      </div>
      <ScrollToTop />
    </Layout>
  );
}
