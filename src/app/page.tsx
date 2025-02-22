// import styles from "./page.module.css";
// import Layout from "./_components/Layout";
// // import Menu from "./_components/Menu";
// import Main from "./_components/Main";
// import Sub from "./_components/Sub";
// import Ad from "./_components/Ad";
// import { TOP_ARTICLE_LIST_LIMIT } from "@/app/_constants";
// import { getArticleList } from "@/app/_libs/microcms";
// import Cards from "./_components/Cards";
// import Ranking from "./_components/Ranking";
// import SearchField from "./_components/SearchField";
// import ButtonLink from "./_components/ButtonLink";
// import Pickup from "./_components/Pickup";

// export const revalidate = 60;

// type Props = {
//   searchParams: {
//     rankingDraftKey?: string;
//     pickupDraftKey?: string;
//   };
// };

// export default async function Page({ searchParams }: Props) {
//   const data = await getArticleList({
//     limit: TOP_ARTICLE_LIST_LIMIT,
//   });
//   return (
//     <Layout>
//       <Main>
//         <h1>新着情報</h1>
//         <Cards articles={data.contents} />
//         <div className={styles.buttonLink}>
//           <ButtonLink href="/articles">Read More</ButtonLink>
//         </div>
//       </Main>
//       <Sub>
//         <Ad />
//         <Pickup draftKey={searchParams.pickupDraftKey} />
//         <SearchField />
//         <Ranking draftKey={searchParams.rankingDraftKey} />
//         <Ad />
//       </Sub>
//     </Layout>
//   );
// }

import styles from "./page.module.css";
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
import Pickup from "./_components/Pickup";

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
      <div className={styles.container}>
        {/* メインエリア */}
        <Main className={styles.mainContent}>
          {/* 新着情報リスト */}
          <h1 className={styles.sectionTitle}>新着情報</h1>
          <Cards articles={data.contents} />
          <div className={styles.buttonLink}>
            <ButtonLink href="/articles">Read More</ButtonLink>
          </div>
        </Main>
        {/* サイドバー */}
        <Sub className={styles.sidebar}>
          <Ad />
          <Pickup draftKey={searchParams.pickupDraftKey} />
          <SearchField />
          <Ranking draftKey={searchParams.rankingDraftKey} />
          <Ad />
        </Sub>
      </div>
    </Layout>
  );
}
