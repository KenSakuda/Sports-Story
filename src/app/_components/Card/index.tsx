import Link from "next/link";
import Image from "next/image";
import { Article } from "@/app/_libs/microcms";
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";

type Props = {
  article: Article;
};

export default function Card({ article }: Props) {
  return (
    <Link href={`/articles/${article.id}`}>
      <Image src={article.image1.url} alt="" width={1000} height={50} />
      <dl>
        <dt>{article.title}</dt>
        <dd>
          <Category category={article.category} />
          <Date date={article.date} />
        </dd>
        <dd>{article.description}</dd>
      </dl>
    </Link>
  );
}
