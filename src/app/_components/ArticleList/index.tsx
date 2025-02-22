import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import Category from "../Category";
import Date from "../Date";
import { Article } from "@/app/_libs/microcms";

type Props = {
  article: Article[];
};

export default function ArticleList({ article }: Props) {
  if (article.length === 0) {
    return <p>記事はありません</p>;
  }
  return (
    <ul>
      {article.map((articles) => (
        <li key={articles.id} className={styles.list}>
          <Link href={`/articles/${articles.id}`} className={styles.link}>
            {articles.image1 ? (
              <Image
                src={articles.image1.url}
                alt=""
                className={styles.image}
                width={articles.image1.width}
                height={articles.image1.height}
              />
            ) : (
              <Image
                className={styles.image}
                src="/no-image.png"
                alt="No Image"
                width={1200}
                height={630}
              />
            )}
            <dl className={styles.content}>
              <dt className={styles.title}>{articles.title}</dt>
              <dd className={styles.meta}>
                <Category category={articles.category} />
                <Date date={articles.date} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
