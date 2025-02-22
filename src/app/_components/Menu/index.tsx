import styles from "./index.module.css";
const categories = [
  "すべて",
  "サッカー",
  "野球",
  "バスケットボール",
  "ラグビー",
  "フィギュアスケート",
  "テニス",
  "ゴルフ",
  "格闘技",
  "陸上競技",
  "競泳",
  "自転車競技",
  "モータースポーツ",
  "冬季競技",
  "その他",
];
export default function Menu() {
  return (
    <div className={styles.menu}>
      <ul className={styles.categoryList}>
        {categories.map((category, index) => (
          <li key={index} className={styles.categoryItem}>
            <a href={`#${category}`} className={styles.categoryLink}>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
