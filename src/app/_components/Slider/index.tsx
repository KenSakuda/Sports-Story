"use client";

import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Article } from "@/app/_libs/microcms";
import Image from "next/image";
import Link from "next/link";

type Props = {
  articles: Article[];
};

export default function Slider({ articles }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const intervalTime = 6000;
  const steps = 5;
  const progressPerStep = 100 / (steps - 1);

  useEffect(() => {
    if (articles.length === 0) return;
    let step = 0;
    const progressInterval = setInterval(() => {
      setProgress((prev) => prev + progressPerStep);
      step++;
      if (step >= steps) {
        setProgress(0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
        step = 0;
      }
    }, intervalTime / steps);
    return () => clearInterval(progressInterval);
  }, [articles]);

  return (
    <div className={styles.sliderContainer}>
      {/* 左ボタン */}
      <button
        className={styles.prevButton}
        onClick={() =>
          setCurrentIndex(
            (prev) => (prev - 1 + articles.length) % articles.length
          )
        }
      >
        <Image src="/left-arrow.svg" alt="Previous" width={40} height={40} />
      </button>
      {/* スライドコンテンツ */}
      <div className={styles.sliderContent}>
        {articles.length > 0 && (
          <Link
            href={`/articles/${articles[currentIndex].id}`}
            className={styles.link}
          >
            <div className={styles.imageContainer}>
              <Image
                src={articles[currentIndex].image1.url}
                alt={articles[currentIndex].title}
                width={950}
                height={500}
                className={styles.sliderImage}
              />
              <div className={styles.overlay}>
                <span className={styles.pickupText}>PICK UP</span>
                <h2 className={styles.title}>{articles[currentIndex].title}</h2>
              </div>
            </div>
          </Link>
        )}
        {/* プログレスバー */}
        <div className={styles.progressBar}>
          {[...Array(steps)].map((_, index) => (
            <div
              key={index}
              className={`${styles.progressSegment} ${
                index * progressPerStep < progress ? styles.active : ""
              }`}
            />
          ))}
        </div>
      </div>
      {/* 右ボタン */}
      <button
        className={styles.nextButton}
        onClick={() => setCurrentIndex((prev) => (prev + 1) % articles.length)}
      >
        <Image src="/right-arrow.svg" alt="Next" width={40} height={40} />
      </button>
    </div>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import styles from "./index.module.css";
// import { Article } from "@/app/_libs/microcms";
// import Image from "next/image";
// import Link from "next/link";
// type Props = {
//   articles: Article[];
// };
// export default function Slider({ articles }: Props) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [progressStep, setProgressStep] = useState(0);
//   const intervalTime = 5000; // 5秒
//   const steps = 5;
//   const progressPerStep = 100 / steps; // 5ステップで100%
//   useEffect(() => {
//     if (articles.length === 0) return;
//     let step = 0;
//     const interval = setInterval(() => {
//       setProgressStep((prev) => prev + progressPerStep);
//       step++;
//       if (step >= steps) {
//         setProgressStep(0);
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
//       }
//     }, intervalTime / steps);
//     return () => clearInterval(interval);
//   }, [articles, progressPerStep]); // :チェックマーク_緑: `progressPerStep` を依存配列に追加
//   return (
//     <div className={styles.sliderContainer}>
//       <button
//         className={styles.prevButton}
//         onClick={() =>
//           setCurrentIndex(
//             (prev) => (prev - 1 + articles.length) % articles.length
//           )
//         }
//       >
//         <Image src="/left-arrow.svg" alt="Previous" width={40} height={40} />
//       </button>
//       <div className={styles.sliderContent}>
//         {articles.length > 0 && (
//           <Link
//             href={`/articles/${articles[currentIndex].id}`}
//             className={styles.link}
//           >
//             <div className={styles.imageContainer}>
//               <Image
//                 src={articles[currentIndex].image1.url}
//                 alt={articles[currentIndex].title}
//                 fill
//                 className={styles.sliderImage}
//               />
//               <div className={styles.overlay}>
//                 <span className={styles.pickupText}>PICK UP</span>
//                 <h2 className={styles.title}>{articles[currentIndex].title}</h2>
//               </div>
//             </div>
//           </Link>
//         )}
//         <div className={styles.progressBar}>
//           {[...Array(steps)].map((_, index) => (
//             <div
//               key={index}
//               className={`${styles.progressSegment} ${
//                 index * progressPerStep < progressStep ? styles.active : ""
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//       <button
//         className={styles.nextButton}
//         onClick={() => setCurrentIndex((prev) => (prev + 1) % articles.length)}
//       >
//         <Image src="/right-arrow.svg" alt="Next" width={40} height={40} />
//       </button>
//     </div>
//   );
// }
