import { Metadata } from "next";
import Image from "next/image";
import { getArticleDetail } from "@/app/_libs/microcms";
import Layout from "@/app/_components/Layout";
import Main from "@/app/_components/Main";
import Sub from "@/app/_components/Sub";
import Ad from "@/app/_components/Ad";
import Ranking from "@/app/_components/Ranking";
import Date from "@/app/_components/Date";
import RichEditor from "@/app/_components/RichEditor";
import Pickup from "@/app/_components/Pickup";
import SearchField from "@/app/_components/SearchField";
import Category from "@/app/_components/Category";
import Cards from "@/app/_components/Cards";
import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    draftKey?: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getArticleDetail(params.slug, {
    draftKey: searchParams.draftKey,
  });
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.image1.url,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getArticleDetail(params.slug, {
    draftKey: searchParams.draftKey,
  });
  return (
    <Layout>
      <div className={styles.contentWrapper}>
        <Main className={styles.mainContent}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.meta}>
            カテゴリー：{data.category && <Category category={data.category} />}
            <Date date={data.date} />
          </div>
          <Image
            src={data.image1.url}
            alt=""
            width={data.image1.width}
            height={data.image1.height}
            className={styles.mainImage}
          />
          {data.content.map((item, i) => {
            if (item.fieldId === "richEditor") {
              return <RichEditor key={i} content={item.richEditor} />;
            }
            if (item.fieldId === "ad" && item.ad) {
              return <Ad key={i} />;
            }
            return null;
          })}
          {(data.relatedArticles ?? []).length > 0 && (
            <>
              <h2 className={styles.relatedTitle}>関連記事</h2>
              <Cards articles={data.relatedArticles ?? []} />
            </>
          )}
        </Main>
        <Sub className={styles.sidebar}>
          <Ad />
          <Pickup />
          <SearchField />
          <Ranking />
        </Sub>
      </div>
    </Layout>
  );
}

//  { Metadata } from "next";
// import Image from "next/image";
// import { getArticleDetail } from "@/app/_libs/microcms";
// import Layout from "@/app/_components/Layout";
// import Main from "@/app/_components/Main";
// import Sub from "@/app/_components/Sub";
// import Ad from "@/app/_components/Ad";
// import Ranking from "@/app/_components/Ranking";
// import Date from "@/app/_components/Date";
// import RichEditor from "@/app/_components/RichEditor";
// import Pickup from "@/app/_components/Pickup";
// import SearchField from "@/app/_components/SearchField";
// import Category from "@/app/_components/Category";
// import Cards from "@/app/_components/Cards";

// type Props = {
//   params: {
//     slug: string;
//   };
//   searchParams: {
//     draftKey?: string;
//   };
// };

// export const revalidate = 60;

// export async function generateMetadata({
//   params,import
//   searchParams,
// }: Props): Promise<Metadata> {
//   const data = await getArticleDetail(params.slug, {
//     draftKey: searchParams.draftKey,
//   });

//   return {
//     title: data.title,
//     description: data.description,
//     openGraph: {
//       title: data.title,
//       description: data.description,
//       images: data.image1.url,
//     },
//   };
// }

// export default async function Page({ params, searchParams }: Props) {
//   const data = await getArticleDetail(params.slug, {
//     draftKey: searchParams.draftKey,
//   });

//   return (
//     <Layout>
//       <Main>
//         <h1>{data.title}</h1>
//         <div>
//           カテゴリー：{data.category && <Category category={data.category} />}
//         </div>
//         <div>
//           <Date date={data.date} />
//         </div>
//         <Image
//           src={data.image1.url}
//           alt=""
//           width={data.image1.width}
//           height={data.image1.height}
//         />
//         {data.content.map((item, i) => {
//           if (item.fieldId === "richEditor") {
//             return <RichEditor key={i} content={item.richEditor} />;
//           }
//           if (item.fieldId === "ad" && item.ad) {
//             return <Ad key={i} />;
//           }
//           return null;
//         })}
//         {(data.relatedArticles ?? []).length > 0 && (
//           <>
//             <h2>関連記事</h2>
//             <Cards articles={data.relatedArticles ?? []} />
//           </>
//         )}
//       </Main>
//       <Sub>
//         <Ad />
//         <Pickup />
//         <SearchField />
//         <Ranking />
//       </Sub>
//     </Layout>
//   );
// }
