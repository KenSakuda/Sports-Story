// import { Metadata } from "next";
// import Layout from "@/app/_components/Layout";
// import Main from "@/app/_components/Main";
// import Sub from "@/app/_components/Sub";
// import Ad from "@/app/_components/Ad";
// import { DETAIL_ARTICLE_LIST_LIMIT } from "@/app/_constants";
// import { getArticleList, getCategoryDetail } from "@/app/_libs/microcms";
// import Cards from "@/app/_components/Cards";
// import Ranking from "@/app/_components/Ranking";
// import Predict from "@/app/_components/Predict";
// import Stats from "@/app/_components/Stats";
// import SearchField from "@/app/_components/SearchField";
// import { notFound } from "next/navigation";
// import { ReadMore } from "@/app/_components/ReadMore";

// type Props = {
//   params: {
//     categoryId: string;
//   };
// };

// export const revalidate = 60;

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const category = await getCategoryDetail(params.categoryId);
//   return {
//     title: category.name,
//   };
// }

// export default async function Page({ params }: Props) {
//   const filters = `category[equals]${params.categoryId}`;
//   const data = await getArticleList({
//     limit: DETAIL_ARTICLE_LIST_LIMIT,
//     filters,
//   });
//   const category = await getCategoryDetail(params.categoryId).catch(() =>
//     notFound()
//   );
//   return (
//     <Layout>
//       <Main>
//         <h1>{category.name}</h1>
//         <Cards articles={data.contents} />
//         <ReadMore filters={filters} totalCount={data.totalCount} />
//       </Main>
//       <Sub>
//         <Ad />
//         <Ranking />
//         <Ad />
//         <Predict />
//         <SearchField />
//         <Stats />
//       </Sub>
//     </Layout>
//   );
// }
