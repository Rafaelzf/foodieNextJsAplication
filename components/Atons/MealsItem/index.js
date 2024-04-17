"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./mealsItem.module.css";

import { deleteItem } from "@/server/actions";

function MealsItem({ title, slug, image, summary, creator, id }) {
  const deleteMeal = async () => {
    await deleteItem(id);
  };
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image
            src={`https://rafaelfrancucci-nextjs-demo-users-image.s3.sa-east-1.amazonaws.com/${image}`}
            alt={title}
            fill
          />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
          {id > 16 && <button onClick={deleteMeal}>Delete</button>}
        </div>
      </div>
    </article>
  );
}

export default MealsItem;
