import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Category = {
  name: string;
};

export type Article = {
  title: string;
  description?: string;
  category: Category;
  date: string;
  content: (RichEditor | Ad)[];
  relatedArticles?: Article[];
  image1: MicroCMSImage;
  image2?: MicroCMSImage;
  image3?: MicroCMSImage;
  image4?: MicroCMSImage;
  image5?: MicroCMSImage;
  image6?: MicroCMSImage;
  image7?: MicroCMSImage;
} & MicroCMSListContent;

export type RichEditor = {
  fieldId: "richEditor";
  richEditor: string;
};

export type Ad = {
  fieldId: "ad";
  ad: boolean;
};

export type Ranking = {
  articles: Article[];
} & MicroCMSListContent;

export type Pickup = {
  articles: Article[];
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getArticleList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Article>({
    endpoint: "article",
    queries,
  });
  return listData;
};

export const getArticleDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Article>({
    endpoint: "article",
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });
  return detailData;
};

export const getRanking = async (queries?: MicroCMSQueries) => {
  const detailData = await client.getObject<Ranking>({
    endpoint: "ranking",
    queries,
  });
  return detailData;
};

export const getPickup = async (queries?: MicroCMSQueries) => {
  const detailData = await client.getObject<Ranking>({
    endpoint: "pickup",
    queries,
  });
  return detailData;
};

// export const getCategoryDetail = async (
//   contentId: string,
//   queries?: MicroCMSQueries
// ) => {
//   const detailData = await client.getListDetail<Category>({
//     endpoint: "categories",
//     contentId,
//     queries,
//   });
//   return detailData;
// };

// export const getAllArticleList = async () => {
//   const listData = await client.getAllContents<Article>({
//     endpoint: "article",
//   });
//   return listData;
// };

// export const getAllCategoryList = async () => {
//   const listData = await client.getAllContents<Category>({
//     endpoint: "categories",
//   });
//   return listData;
// };

// ^^^^^^^^^^^^

// // カテゴリーを取得
// export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
//   const detailData = await client.getListDetail<Category>({
//     endpoint: 'categories',
//     contentId,
//     queries,
//   });
//   return detailData;
// };
